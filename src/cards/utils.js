import { subtotalFromTier } from "../tiers";

export default function totalFromAddons(vendor, addons) {
	const {name, logoUrl} = vendor;

	let platforms =	addons.reduce((total, addon) => {
		return addon.platforms.reduce((total, platform) => {
			const temp = total[platform.name] || {};
			total[platform.name] = platform.tiers.reduce((total, tier) => {
				const temp = total[tier.name] || {};
				total[tier.name] = subtotalFromTier(temp, tier);

				return total;
			}, temp);

			return total;
		}, total);
	}, {});

	platforms = Object.keys(platforms).map(name => {
		const platform = platforms[name],
					tiers = Object.keys(platform).map(name => {
			const tier = platform[name],
						subtotals = Object.keys(tier).map(type => {
				const {amount, count} = tier[type];

				return {type, amount, count};
			});

			return {name, subtotals};
		});

		return {name, tiers};
	});

	return {name, logoUrl, platforms};
}