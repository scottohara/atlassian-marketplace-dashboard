function totalFromSubtotals(subtotals) {
	return subtotals.reduce((total, subtotal) => ({amount: total.amount + (isNaN(subtotal.amount) ? 0 : +subtotal.amount), count: total.count + (isNaN(subtotal.count) ? 0 : +subtotal.count)}), {amount: 0, count: 0});
}

function subtotalsObjectToArray(subtotals) {
	return Object.keys(subtotals).map(type => {
		const {amount, count} = subtotals[type];

		return {type, amount, count};
	});
}

export { totalFromSubtotals, subtotalsObjectToArray };