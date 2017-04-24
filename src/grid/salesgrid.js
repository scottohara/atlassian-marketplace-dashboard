import React, { Component } from 'react';
import './salesgrid.css';
import loadingSpinner from './ring.svg';

class MarketplaceDashboardLogin extends Component {
	constructor(props) {
		super(props);

		const {userName, password} = this.props;

		this.state = {userName, password};
		this.handleUserNameChange = this.handleUserNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleUserNameChange(event) {
		this.setState({userName: event.target.value});
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	handleLogin(event) {
		this.props.login(this.state.userName, this.state.password);
		event.preventDefault();
	}

	render() {
		const status = this.props.isLoggedIn ? "logged-in" : "logged-out";

		return (
			<form onSubmit={this.handleLogin}>
				<label>
					Atlassian ID:
					<input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
				</label>
				<label>
					Password:
					<input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
				</label>
				<input type="submit" value="Login"/>
				<span className={status}/>
			</form>
		);
	}
}

class MarketplaceDashboardRange extends Component {
	constructor(props) {
		super(props);

		const {startDate, endDate} = this.props;

		this.state = {startDate, endDate};
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.yesterday = this.yesterday.bind(this);
		this.previousDay = this.previousDay.bind(this);
		this.nextDay = this.nextDay.bind(this);
		this.monthToDate = this.monthToDate.bind(this);
		this.previousMonth = this.previousMonth.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleStartDateChange(event) {
		this.setState({startDate: event.target.value});
	}

	handleEndDateChange(event) {
		this.setState({endDate: event.target.value});
	}

	yesterday(event) {
		let yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		yesterday = yesterday.toISOString().substr(0, 10);
		this.setState({startDate: yesterday, endDate: yesterday});
		event.preventDefault();
	}

	adjustDay(days) {
		let startDate = new Date(this.state.startDate),
				endDate = new Date(this.state.endDate);

		startDate.setDate(startDate.getDate() + days);
		startDate = startDate.toISOString().substr(0, 10);
		endDate.setDate(endDate.getDate() + days);
		endDate = endDate.toISOString().substr(0, 10);
		this.setState({startDate, endDate});
	}
	previousDay(event) {
		this.adjustDay(-1);
		event.preventDefault();
	}

	nextDay(event) {
		this.adjustDay(+1);
		event.preventDefault();
	}

	monthToDate(event) {
		let startDate = new Date(this.state.startDate),
				endDate = new Date();

		startDate.setDate(1);
		startDate = startDate.toISOString().substr(0, 10);
		endDate.setDate(endDate.getDate() - 1);
		endDate = endDate.toISOString().substr(0, 10);
		this.setState({startDate, endDate});
		event.preventDefault();
	}

	previousMonth(event) {
		let startDate = new Date(),
				endDate = new Date();

		startDate.setDate(1);
		startDate.setMonth(startDate.getMonth() - 1);
		startDate = startDate.toISOString().substr(0, 10);
		endDate.setDate(0);
		endDate = endDate.toISOString().substr(0, 10);
		this.setState({startDate, endDate});
		event.preventDefault();
	}

	handleSubmit(event) {
		this.props.setRange(this.state.startDate, this.state.endDate);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Start Date:
					<input type="date" value={this.state.startDate} onChange={this.handleStartDateChange}/>
				</label>
				<label>
					End Date:
					<input type="date" value={this.state.endDate} onChange={this.handleEndDateChange}/>
				</label>
				<a href="#" onClick={this.yesterday}>[Yesterday]</a>
				<a href="#" onClick={this.previousDay}>[  &lt;  ]</a>
				<a href="#" onClick={this.nextDay}>[  &gt;  ]</a>
				<a href="#" onClick={this.monthToDate}>[Month to Date]</a>
				<a href="#" onClick={this.previousMonth}>[Last Month]</a>
				<input type="submit" value="Submit" disabled={!this.props.isLoggedIn}/>
				<img height="20" width="20" className={this.props.loading ? "loading" : "loaded"} src={loadingSpinner} alt="loading"/>
				<span> {this.props.numTransactions} transactions</span>
			</form>
		);
	}
}

class MarketplaceDashboardHeader extends Component {
	render() {
		const {addons} = this.props;

		return (
			<thead>
				<tr>
					<th colSpan="2"/>
					{addons.map((addon, i) => <th className="addon" colSpan="5" key={i}>{addon.name}</th>)}
				</tr>
				<tr>
					<th>Type</th>
					<th>Tier</th>
					{addons.map(_ => [
						<th className="addon">Sales</th>,
						<th>Renewals</th>,
						<th>Upgrades</th>,
						<th>Refunds</th>,
						<th>Total</th>
					])}
				</tr>
			</thead>
		);
	}
}

class MarketplaceCloudSales extends Component {
	render() {
		const {...props} = this.props;

		return (
			<MarketplaceSales {...props}
				type="Cloud"
				tiers={[10,15,25,50,100,500,2000]}
			/>
		);
	}
}

class MarketplaceServerSales extends Component {
	render() {
		const {...props} = this.props;

		return (
			<MarketplaceSales {...props}
				type="Server"
				tiers={[10,25,50,100,250,500,2000,10000, "Unlimited"]}
			/>
		);
	}
}

class MarketplaceSales extends Component {
	render() {
		const {tiers, ...props} = this.props;

		return (
			<tbody>
				{tiers.map((tier, i, tiers) =>
					<MarketplaceDashboardRow {...props}
						key={tier}
						label={tier}
						first={0 === i}
						total={tiers.length}
					/>
				)}
			</tbody>
		);
	}
}

class MarketplaceDashboardRow extends Component {
	renderTransactions(transactions) {
		const {sales, renewals, upgrades, refunds} = transactions,
					total = {
						count: sales.count + renewals.count + upgrades.count + refunds.count,
						amount: sales.amount + renewals.amount + upgrades.amount + refunds.amount
					};

		return [sales, renewals, upgrades, refunds, total].map(this.transaction);
	}

	transaction(type, i) {
		const {count, amount} = type,
					currency = amount.toLocaleString("en-au", {style: "currency", currency: "AUD"}),
					className = `transactions ${0 === i ? "addon": ""}`;

		return (
			<td className={className}>{count > 0 ? `(${count}) ${currency}` : ""}</td>
		);
	}

	render() {
		const {type, label, first, total, addons} = this.props;

		return (
			<tr>
				{first && <td rowSpan={total}>{type}</td>}
				<td>{label}</td>
				{addons.map(addon => this.renderTransactions(addon[type.toLowerCase()][label]))}
			</tr>
		);
	}
}

class MarketplaceDashboardFooter extends Component {
	render() {
		const {addons} = this.props;

		let totals = addons.map(addon => ({
			total: {
				Cloud: Object.keys(addon.cloud).reduce((total, tier) => {
					total.sales.count += addon.cloud[tier].sales.count;
					total.sales.amount += addon.cloud[tier].sales.amount;
					total.renewals.count += addon.cloud[tier].renewals.count;
					total.renewals.amount += addon.cloud[tier].renewals.amount;
					total.upgrades.count += addon.cloud[tier].upgrades.count;
					total.upgrades.amount += addon.cloud[tier].upgrades.amount;
					total.refunds.count += addon.cloud[tier].refunds.count;
					total.refunds.amount += addon.cloud[tier].refunds.amount;
					total.total.count = total.sales.count + total.renewals.count + total.upgrades.count + total.refunds.count;
					total.total.amount = total.sales.amount + total.renewals.amount + total.upgrades.amount + total.refunds.amount;

					return total;
				}, {sales: {count: 0, amount: 0}, renewals: {count: 0, amount: 0}, upgrades: {count: 0, amount: 0}, refunds: {count: 0, amount: 0}, total: {count: 0, amount: 0}}),
				Server: Object.keys(addon.server).reduce((total, tier) => {
					total.sales.count += addon.server[tier].sales.count;
					total.sales.amount += addon.server[tier].sales.amount;
					total.renewals.count += addon.server[tier].renewals.count;
					total.renewals.amount += addon.server[tier].renewals.amount;
					total.upgrades.count += addon.server[tier].upgrades.count;
					total.upgrades.amount += addon.server[tier].upgrades.amount;
					total.refunds.count += addon.server[tier].refunds.count;
					total.refunds.amount += addon.server[tier].refunds.amount;
					total.total.count = total.sales.count + total.renewals.count + total.upgrades.count + total.refunds.count;
					total.total.amount = total.sales.amount + total.renewals.amount + total.upgrades.amount + total.refunds.amount;

					return total;
				}, {sales: {count: 0, amount: 0}, renewals: {count: 0, amount: 0}, upgrades: {count: 0, amount: 0}, refunds: {count: 0, amount: 0}, total: {count: 0, amount: 0}})
			}
		}));

		totals.forEach(addon => {
			addon.total.All = Object.keys(addon.total).reduce((total, type) => {
					total.sales.count += addon.total[type].sales.count;
					total.sales.amount += addon.total[type].sales.amount;
					total.renewals.count += addon.total[type].renewals.count;
					total.renewals.amount += addon.total[type].renewals.amount;
					total.upgrades.count += addon.total[type].upgrades.count;
					total.upgrades.amount += addon.total[type].upgrades.amount;
					total.refunds.count += addon.total[type].refunds.count;
					total.refunds.amount += addon.total[type].refunds.amount;
					total.total.count = total.sales.count + total.renewals.count + total.upgrades.count + total.refunds.count;
					total.total.amount = total.sales.amount + total.renewals.amount + total.upgrades.amount + total.refunds.amount;

					return total;
			}, {sales: {count: 0, amount: 0}, renewals: {count: 0, amount: 0}, upgrades: {count: 0, amount: 0}, refunds: {count: 0, amount: 0}, total: {count: 0, amount: 0}})
		});

		const grandTotal = {
			count: totals.reduce((total, addon) => total += addon.total.All.total.count, 0),
			amount: totals.reduce((total, addon) => total += addon.total.All.total.amount, 0),
		};

		return (
			<tfoot>
				<MarketplaceDashboardRow
					type="Total"
					label="Cloud"
					first={true}
					total={3}
					addons={totals}
				/>
				<MarketplaceDashboardRow
					type="Total"
					label="Server"
					first={false}
					addons={totals}
				/>
				<MarketplaceDashboardRow
					type="Total"
					label="All"
					first={false}
					addons={totals}
				/>
				<tr>
					<td colSpan={2} className="transactions">({grandTotal.count}) {grandTotal.amount.toLocaleString("en-au", {style: "currency", currency: "AUD"})}</td>
				</tr>
			</tfoot>
		);
	}
}

class MarketplaceDashboard extends Component {
	render() {
		const {addons} = this.props;

		return (
			<table className="marketplace-dashboard">
				<MarketplaceDashboardHeader addons={addons}/>
				<MarketplaceCloudSales addons={addons}/>
				<MarketplaceServerSales addons={addons}/>
				<MarketplaceDashboardFooter addons={addons}/>
			</table>
		);
	}
}

export default class AddOnSalesGrid extends Component {
	constructor(props) {
		super(props);
		this.cloudTiers = [10,15,25,50,100,500,2000];
		this.serverTiers = [10,25,50,100,250,500,2000,10000, "Unlimited"];
		this.state = this.initialState();
	}

	login(userName, password) {
		window.localStorage.setItem("atlassian-id", userName);
		window.localStorage.setItem("atlassian-password", password);
		this.setState({userName, password, isLoggedIn: "" !== userName && "" !== password});
	}

	setRange(startDate, endDate) {
		this.resetData();
		this.fetchData(startDate, endDate)
			.then(this.transform)
			.then(this.merge.bind(this))
			.then(data => this.setState({startDate, endDate, data, loading: false}))
	}

	initialTiers(tiers, tier) {
		tiers[tier] = {sales: {count: 0, amount: 0}, renewals: {count: 0, amount: 0}, upgrades: {count: 0, amount: 0}, refunds: {count: 0, amount: 0}};
		return tiers;
	}

	initialAddOn(name) {
		const cloud = this.cloudTiers.reduce(this.initialTiers, {}),
					server = this.serverTiers.reduce(this.initialTiers, {});

		return {name, cloud, server};
	}

	initialState() {
		let yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		yesterday = yesterday.toISOString().substr(0, 10);

		return {
			userName: window.localStorage.getItem("atlassian-id") || "",
			password: window.localStorage.getItem("atlassian-password") || "",
			isLoggedIn: false,
			startDate: yesterday,
			endDate: yesterday,
			numTransactions: 0,
			loading: false,
			addOns: [
				this.initialAddOn("Open API Documentation for Confluence"),
				this.initialAddOn("Sequence Diagrams for Confluence"),
				this.initialAddOn("Sequence Diagrams for JIRA")
			]
		};
	}

	resetData() {
		const {addOns} = this.initialState();
		this.setState({addOns, numTransactions: 0});
	}

	fetchData(startDate, endDate, offset = 0, transactions = []) {
		const credentials = btoa(`${this.state.userName}:${this.state.password}`),
					headers = {Authorization: `Basic ${credentials}`},
					baseUrl = "https://atlassian-marketplace-proxy.herokuapp.com",  // http://marketplace.atlassian.com
					url = `${baseUrl}/rest/2/vendors/1212012/reporting/sales/transactions?limit=50&offset=${offset}&startDate=${startDate}&endDate=${endDate}`;

		this.setState({loading: true});

		return fetch(url, {headers})
			.then(response => response.json())
			.then(json => {
				if (json.transactions) transactions = [...transactions, ...json.transactions];
				this.setState({numTransactions: transactions.length});
				return json._links.next ? this.fetchData(startDate, endDate, offset + 50, transactions) : transactions;
			})
			.catch(console.log);
	}

	transform(transactions) {
		return transactions.reduce((addons, transaction) => {
			const name = transaction.addonName;
			let {hosting, tier, saleType, vendorAmount} = transaction.purchaseDetails;

			tier = tier.replace(" Users", "");

			addons[name] = addons[name] || {};
			addons[name][hosting] = addons[name][hosting] || {};
			addons[name][hosting][tier] = addons[name][hosting][tier] || {};
			addons[name][hosting][tier][saleType] = addons[name][hosting][tier][saleType] || {count: 0, amount: 0};
			addons[name][hosting][tier][saleType].count++;
			addons[name][hosting][tier][saleType].amount += vendorAmount;

			return addons;
		}, {})
	}

	mergedTiers(type, transactions) {
		return (tiers, tier) => {
			if (transactions && transactions[type] && transactions[type][tier]) {
				tiers[tier].sales = transactions[type][tier].New || tiers[tier].sales;
				tiers[tier].renewals = transactions[type][tier].Renewal || tiers[tier].renewals;
				tiers[tier].upgrades = transactions[type][tier].Upgrade || tiers[tier].upgrades;
				tiers[tier].refunds = transactions[type][tier].Refund || tiers[tier].refunds;
			}

			return tiers;
		}
	}

	merge(data) {
		return {
			addOns: this.state.addOns.map(addon => {
				const transactions = data[addon.name];

				addon.cloud = this.cloudTiers.reduce(this.mergedTiers("Cloud", transactions), addon.cloud);
				addon.server = this.serverTiers.reduce(this.mergedTiers("Server", transactions), addon.server);

				return addon;
			})
		};
	}

	render() {
		return (
			<div>
				<MarketplaceDashboardLogin
					login={this.login.bind(this)}
					userName={this.state.userName}
					password={this.state.password}
					isLoggedIn={this.state.isLoggedIn}
				/>
				<MarketplaceDashboardRange
					setRange={this.setRange.bind(this)}
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					isLoggedIn={this.state.isLoggedIn}
					numTransactions={this.state.numTransactions}
					loading={this.state.loading}
				/>
				<MarketplaceDashboard addons={this.state.addOns}/>
			</div>
		);
	}
}