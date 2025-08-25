function yesterday(): string {
	const DATE_LENGTH = 10,
		today = new Date();

	today.setDate(today.getDate() - 1);

	return today.toISOString().slice(0, DATE_LENGTH);
}

export const dateRange = $state({
	start: yesterday(),
	end: yesterday(),
});
