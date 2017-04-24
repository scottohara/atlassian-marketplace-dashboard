import subtotalFromPlatforms from "./utils";

describe("subtotalFromPlatforms", () => {
	it("should calculate the subtotals", () => {
		const platforms = [
			{
				name: "Cloud",
				tiers: [
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
				]
			},
			{
				name: "Server",
				tiers: [
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
						name: "25",
						subtotals: [
							{type: "Sales", amount: 5, count: 1}
						]
					}
				]
			}
		];
		expect(subtotalFromPlatforms(platforms)).toEqual([
			{type: "Sales", amount: 30, count: 4},
			{type: "Renewals", amount: 55, count: 6},
			{type: "Upgrades", amount: 60, count: 6},
			{type: "Refunds", amount: -80, count: -8}
		]);
	});
});