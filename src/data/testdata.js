import totalFromAddons from "../cards/utils";

const vendor = {
	name: "O'Hara Group",
	logo: "https://marketplace-cdn.atlassian.com/files/images/f1732b02-260a-4f02-a1a6-864edb2d363d.png"
};

const addons = [
	{
		name: "Open API Documentation for Confluence",
		logo: "https://marketplace-cdn.atlassian.com/files/images/828ed019-7386-44cd-894f-21bf40726841.png",
		platforms: [
			{
				name: "Cloud",
				tiers: [
					{
						name: "10",
						subtotals: [
							{type: "Sales", amount: 11.25, count: 3},
							{type: "Renewals", amount: 22.5, count: 6},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "15",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 7.5, count: 2},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "25",
						subtotals: [
							{type: "Sales", amount: 7.5, count: 2},
							{type: "Renewals", amount: 3.75, count: 1},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "50",
						subtotals: [
							{type: "Sales", amount: 17.25, count: 1},
							{type: "Renewals", amount: 26.25, count: 7},
							{type: "Upgrades", amount: 3.75, count: 1},
							{type: "Refunds"}
						]
					},
					{
						name: "100",
						subtotals: [
							{type: "Sales", amount: 6, count: 1},
							{type: "Renewals", amount: 18, count: 3},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "500",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 75, count: 5},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "2000",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 45, count: 2},
							{type: "Upgrades"},
							{type: "Refunds"}
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
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "25",
						subtotals: [
							{type: "Sales", amount: 37.5, count: 1},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "50",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "100",
						subtotals: [
							{type: "Sales", amount: 148.49, count: 1},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "250",
						subtotals: [
							{type: "Sales", amount: 335.25, count: 3},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "500",
						subtotals: [
							{type: "Sales", amount: 560.25, count: 3},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "2000",
						subtotals: [
							{type: "Sales", amount: 299.25, count: 1},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "10000",
						subtotals: [
							{type: "Sales", amount: 83.25, count: 1},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "Unlimited",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					}
				]
			}
		]
	},
	{
		name: "Sequence Diagrams for Confluence",
		logo: "https://marketplace-cdn.atlassian.com/files/images/697c8ee6-a8f2-4195-8528-ffbaebdf0a00.png",
		platforms: [
			{
				name: "Cloud",
				tiers: [
					{
						name: "10",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 3.75, count: 1},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "15",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 3.75, count: 1},
							{type: "Upgrades", amount: 3.75, count: 1},
							{type: "Refunds"}
						]
					},
					{
						name: "25",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 3.75, count: 1},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "50",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 3.75, count: 1},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "100",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 10.50, count: 2},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "500",
						subtotals: [
							{type: "Sales", amount: 6.75, count: 1},
							{type: "Renewals", amount: 6.75, count: 1},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "2000",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals", amount: 9, count: 1},
							{type: "Upgrades"},
							{type: "Refunds"}
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
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "25",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "50",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "100",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "250",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "500",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "2000",
						subtotals: [
							{type: "Sales", amount: 111.75, count: 1},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "10000",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "Unlimited",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					}
				]
			}
		]
	},
	{
		name: "Sequence Diagrams for JIRA",
		logo: "https://marketplace-cdn.atlassian.com/files/images/697c8ee6-a8f2-4195-8528-ffbaebdf0a00.png",
		platforms: [
			{
				name: "Cloud",
				tiers: [
					{
						name: "10",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "15",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "25",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "50",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "100",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "500",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "2000",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
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
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "25",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "50",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "100",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "250",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "500",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "2000",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "10000",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					},
					{
						name: "Unlimited",
						subtotals: [
							{type: "Sales"},
							{type: "Renewals"},
							{type: "Upgrades"},
							{type: "Refunds"}
						]
					}
				]
			}
		]
	}
];

// Generate a Total card
addons.unshift(totalFromAddons(vendor, addons));

export default addons;