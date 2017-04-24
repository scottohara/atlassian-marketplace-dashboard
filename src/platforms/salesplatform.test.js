import React from "react";
import { shallow } from "enzyme";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import { AddOnSalesSubtotals } from "../totals";
import AddOnSalesPlatform from "./salesplatform";

describe("<AddOnSalesPlatform>", () => {
	it("renders a single platform", () => {
		const platform = {
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
								name: "25",
								subtotals: [
									{type: "Sales", amount: 15, count: 2},
									{type: "Renewals", amount: 25, count: 3},
									{type: "Upgrades", amount: 35, count: 4},
									{type: "Refunds", amount: -45, count: -5}
								]
							},
						]
					},
					subtotals = [
						{type: "Sales", amount: 25, count: 3},
						{type: "Renewals", amount: 45, count: 5},
						{type: "Upgrades", amount: 65, count: 7},
						{type: "Refunds", amount: -85, count: -9}
					],
					expected = (
						<div className="addon-sales-platform">
							<div className="addon-sales-platform-totals">
								<AddOnSalesAmount amount={50}/>
								<AddOnSalesType type="Cloud"/>
								<AddOnSalesCount count={6}/>
							</div>
							<AddOnSalesSubtotals subtotals={subtotals}/>
						</div>
					);

		expect(shallow(<AddOnSalesPlatform platform={platform}/>)).toContainReact(expected);
	});
});