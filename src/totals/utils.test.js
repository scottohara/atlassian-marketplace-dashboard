import { totalFromSubtotals, subtotalsObjectToArray } from "./utils";

describe("totalFromSubtotals", () => {
	let total;

	beforeEach(() => {
		const subtotals = [
			{amount: 10, count: 1},
			{amount: 20, count: 2},
			{amount: 30, count: 3},
			{amount: -40, count: -4}
		];

		total = totalFromSubtotals(subtotals);
	});

	it("should calculate the total amount", () => expect(total.amount).toEqual(20));
	it("should calculate the total count", () => expect(total.count).toEqual(2));
});

describe("subtotalsObjectToArray", () => {
	it("should convert the object to an array", () => {
		const obj = {
			"Sales": {amount: 10, count: 1},
			"Renewals": {amount: 20, count: 2},
			"Upgrades": {amount: 30, count: 3},
			"Refunds": {amount: -40, count: -4}
		};

		expect(subtotalsObjectToArray(obj)).toEqual([
			{type: "Sales", amount: 10, count: 1},
			{type: "Renewals", amount: 20, count: 2},
			{type: "Upgrades", amount: 30, count: 3},
			{type: "Refunds", amount: -40, count: -4}
		]);
	});
});