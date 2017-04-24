import { LoginService } from "../login";
import { DateRangeService } from "../dates";
import { totalFromAddons } from "../cards";

/**
 * Performs an API fetch
 * @param {String} path - API path to fetch
 * @return {Promise<Object>} - resolves to the JSON returned
 */
function apiFetch(path) {
	const apiHost = "atlassian-marketplace-proxy.herokuapp.com",  //marketplace.atlassian.com
				apiPath = "/rest/2/",
				apiUrl = `https://${apiHost}${apiPath}`,

				// Extract username and password from login service
				{ userName, password } = LoginService,

				// Base64 encode credentials
				credentials = btoa(`${userName}:${password}`),

				// Construct the Authorization header
				headers = {headers: {Authorization: `Basic ${credentials}`}};

	// Execute the fetch and return a promise that resolves to the JSON
	return fetch(`${apiUrl}${path}`, headers).then(response => response.json());
}

/**
 * Extracts the logo URL from an entity
 * @param {Object} entity - vendor or addon
 * @return {String} logoUrl
 */
function getLogoUrl(entity) {
	return entity._embedded.logo._links.image.href;
}

/**
 * Returns the vendors associated with the provided credentials
 * @return {Array<Object>} [{name, logoUrl, addons}] - the vendor details
 */
function fetchVendors() {
	// Get the vendors
	return apiFetch("vendors?forThisUser=true").then(vendorDetails => {
		// Create an array to hold the addon fetch promises
		const addonFetches = [];

		// Build an array of vendors
		const vendors = vendorDetails._embedded.vendors.map(vendor => {
			const	id = vendor._links.self.href.match(/^\/rest\/2\/vendors\/(\d+)$/i)[1],

						// Extract the vendor name
						name = vendor.name,

						// Extract the vendor logo
						logoUrl = getLogoUrl(vendor);

			// Get the addons for the vendor
			addonFetches.push(fetchAddons(id));

			return {name, logoUrl};
		});

		return Promise.all(addonFetches).then(addonDetails => vendors.map((vendor, index) => {
			// Generate a Total card for the vendor
			addonDetails[index].unshift(totalFromAddons(vendor, addonDetails[index]));

			return Object.assign(vendor, {addons: addonDetails[index]})
		}));
	});
}

/**
 * Returns the addons for a given vendor
 * @param {String} vendorId - the vendor
 * @return {Array<Object>} [{name, logoUrl, platforms}] - the addon details
 */
function fetchAddons(vendorId) {
	// Get the addons
	return apiFetch(`addons/vendor/${vendorId}`).then(addonDetails => {
		// Create an array to hold the transaction fetch promises
		const transactionFetches = [];

		// Build an array of addons
		const addons = addonDetails._embedded.addons.map(addon => {
			const {key, name} = addon,

						// Extract the addon logo
						logoUrl = getLogoUrl(addon);

			// Get the sales data for the addon
			transactionFetches.push(fetchData(vendorId, key)
				.then(subtotal)
				.then(transform)
			);

			return {name, logoUrl};
		});

		return Promise.all(transactionFetches).then(transactionDetails => addons.map((addon, index) => Object.assign(addon, {platforms: transactionDetails[index]})));
	});
}

/**
 * Returns an empty addon template containing all platforms, tiers & sale types
 * @return {Object} {platform: {tier: {saleType: {count, amount}}}} - the template
 */
function template() {
	const PLATFORMS = [
		{platform: "Cloud", tiers: ["10", "15", "25", "50", "100", "500", "2000"]},
		{platform: "Server", tiers: ["10", "25", "50", "100", "250", "500", "2000", "10000", "Unlimited"]}
	];

	return platformsTemplate(PLATFORMS);
}

/**
 * Returns an empty platforms template for the specified platforms
 * @param {Array<Object>} [{platform, tiers}] - platform and tier names
 * @return {Object} {platform: {tier: {saleType: {count, amount}}}} - the template
 */
function platformsTemplate(platforms) {
	return platforms.reduce((template, {platform, tiers}) => Object.assign(template, {[platform]: tiersTemplate(tiers)}), {});
}

/**
 * Returns an empty tiers template for the specified tiers
 * @param {Array<String>} - tiers
 * @return {Object} {tier: {saleType: {count, amount}}} - the template
 */
function tiersTemplate(tiers) {
	return tiers.reduce((template, tier) => Object.assign(template, {[tier]: subtotalsTemplate()}), {});
}

/**
 * Returns an empty subtotals template containing all sale types
 * @return {Object} {saleType: {count, amount}} - the template
 */
function subtotalsTemplate() {
	const SALES_TYPES = ["New", "Renewal", "Upgrade", "Refund"];

	return SALES_TYPES.reduce((template, type) => Object.assign(template, {[type]: salesTypeTemplate()}), {});
}

/**
 * Returns an empty sales type template
 * @return {Object} {count, amount} - the template
 */
function salesTypeTemplate() {
	return {count: 0, amount: 0};
}

/**
 * Recursively fetches all vendor transactions from the Marketplace API for the specified date range
 * The promise resolves to an array of transactions like this:
 * [
 *   {purchaseDetails: {hosting, tier, saleType, vendorAmount}},
 * 	 ...
 * ]
 *
 * @param {String} vendorId - the vendor
 * @param {String} addonKey - the addon
 * @param {Number} offset - 50 transactions per fetch
 * @param {Array} transactions - the array for storing the results
 * @return {Promise<Array>} - the transaction details
 */
function fetchData(vendorId, addonKey, offset = 0, transactions = []) {
	const {startDate, endDate} = DateRangeService,
				path = `vendors/${vendorId}/reporting/sales/transactions?addon=${addonKey}&limit=50&offset=${offset}&startDate=${startDate}&endDate=${endDate}`;

	// Get the sales transactions
	return apiFetch(path)
		.then(json => {
			// If the JSON includes transactions, append them to the previously fetched results
			if (json.transactions) transactions = [...transactions, ...json.transactions];

			// If there are more transactions, fetch them; otherwise return the array of transactions
			return json._links.next ? fetchData(vendorId, addonKey, offset + 50, transactions) : transactions;
		})
		.catch(console.log);
}

/**
 * Converts & subtotals the array of fetched transactions
 * @param {Array} transactions - the fetched transactions
 * @return {Object} {platform: {tier: {saleType: {count, amount}}}}
 */
function subtotal(transactions) {
	return transactions.reduce((addons, transaction) => {
		let {hosting, tier, saleType, vendorAmount} = transaction.purchaseDetails;

		tier = tier.replace(" Users", "");

		addons[hosting] = addons[hosting] || {};
		addons[hosting][tier] = addons[hosting][tier] || {};
		addons[hosting][tier][saleType] = addons[hosting][tier][saleType] || {count: 0, amount: 0};
		addons[hosting][tier][saleType].count++;
		addons[hosting][tier][saleType].amount += vendorAmount;

		return addons;
	}, template());
}

/**
 * Transforms the data to the final format
 * @param {Object} data - the converted & subtotalled transactions
 * @return {Array} [{name, tiers: [{name, subtotals: [{type, amount, count}]}]
 */
function transform(data) {
	return Object.keys(data).map(platform => ({
		name: platform,
		tiers: Object.keys(data[platform]).map(tier => ({
			name: tier,
			subtotals: Object.keys(data[platform][tier]).map(type => ({
				type,
				amount: data[platform][tier][type].amount,
				count: data[platform][tier][type].count
			}))
		}))
	}));
}

export default class DataService {
	/**
	 * Retrieves data from the Atlassian Marketplace API
	 * @return {Array} - the sales data for all vendors/addons
	 */
	static refresh() {
		return fetchVendors();
	}
}