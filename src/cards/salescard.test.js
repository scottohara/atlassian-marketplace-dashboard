import React from "react";
import { shallow } from "enzyme";
import AddOnSalesCard from "./salescard";
import { AddOnSalesTotal, AddOnSalesSubtotals } from "../totals";
import { AddOnSalesPlatforms } from "../platforms";

describe("<AddOnSalesCard>", () => {
	it("renders a single card for an addon", () => {
		const addon = {
						name: "AddOn 1",
						logo: "logo.png",
						platforms: [
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
						]
					},
					subtotals = [
						{type: "Sales", amount: 30, count: 4},
						{type: "Renewals", amount: 55, count: 6},
						{type: "Upgrades", amount: 60, count: 6},
						{type: "Refunds", amount: -80, count: -8}
					],
					expected = (
						<div className="addon-sales-card">
							<h1>AddOn 1</h1>
							<AddOnSalesTotal logo="logo.png" amount={65} count={8}/>
							<AddOnSalesSubtotals subtotals={subtotals}/>
							<AddOnSalesPlatforms platforms={addon.platforms}/>
						</div>
					);

		expect(shallow(<AddOnSalesCard addon={addon}/>)).toContainReact(expected);
	});
});