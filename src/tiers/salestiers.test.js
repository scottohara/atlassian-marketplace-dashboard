import React from "react";
import { shallow } from "enzyme";
import { AddOnSalesType } from "../addons";
import AddOnSalesTier from "./salestier";
import AddOnSalesTiers from "./salestiers";

describe("<AddOnSalesTiers>", () => {
	it("renders all tiers for a platform", () => {
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
					expected = (
						<div className="addon-sales-tiers">
							<AddOnSalesType type="Cloud"/>
							<table>
								<thead>
									<tr>
										<th className="addon-sales-tier-name">Tier</th>
										<th>Sales</th>
										<th>Renewals</th>
										<th>Upgrades</th>
										<th>Refunds</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									<AddOnSalesTier key="10" tier={platform.tiers[0]}/>
									<AddOnSalesTier key="25" tier={platform.tiers[1]}/>
								</tbody>
							</table>
						</div>
					);

		expect(shallow(<AddOnSalesTiers platform={platform}/>)).toContainReact(expected);
	});
});