import { subtotalFromTier, subtotalFromTiers } from "./utils";

describe("subtotalFromTier", () => {
	it("should calculate the subtotals", () => {
		const tier = {
			name: "10",
			subtotals: [
				{type: "Sales", amount: 10, count: 1},
				{type: "Renewals", amount: 20, count: 2},
				{type: "Upgrades", amount: 30, count: 3},
				{type: "Refunds", amount: -40, count: -4}
			]
		};

		expect(subtotalFromTier({}, tier)).toEqual({
			Sales: {amount: 10, count: 1},
			Renewals: {amount: 20, count: 2},
			Upgrades: {amount: 30, count: 3},
			Refunds: {amount: -40, count: -4}
		});
	});
});

describe("subtotalFromTiers", () => {
	it("should calculate the subtotals", () => {
		const tiers = [
			{
				name: "10",
				subtotals: [
					{type: "Sales", amount: 10, count: 1},
					{type: "Renewals", amount: 20, count: 2},
					{type: "Upgrades", amount: 30, count: 3},
					{type: "Refunds", amount: -40, count: -4}
				]
			},
			{
				name: "50",
				subtotals: [
					{type: "Sales", amount: 5, count: 1},
					{type: "Renewals", amount: 15, count: 2}
				]
			}
		];
		expect(subtotalFromTiers(tiers)).toEqual({
			Sales: {amount: 15, count: 2},
			Renewals: {amount: 35, count: 4},
			Upgrades: {amount: 30, count: 3},
			Refunds: {amount: -40, count: -4}
		});
	});
});