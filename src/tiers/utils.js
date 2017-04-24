function subtotalFromTier(total, tier) {
	return tier.subtotals.reduce((total, subtotal) => {
		const {type, amount, count} = subtotal;
		const temp = total[type] || {amount: 0, count: 0};
		total[type] = {amount: temp.amount + (isNaN(amount) ? 0 : +amount), count: temp.count + (isNaN(count) ? 0 : +count)};
		return total;
	}, total);
}

function subtotalFromTiers(tiers, total = {}) {
	return tiers.reduce(subtotalFromTier, total);
}

export { subtotalFromTier, subtotalFromTiers };