import React from "react";
import { shallow } from "enzyme";
import { AddOnSalesAmount, AddOnSalesCount } from "../addons";
import AddOnSalesTier from "./salestier";

describe("<AddOnSalesTier>", () => {
	it("renders a single tier", () => {
		const tier = {
						name: "10",
						subtotals: [
							{type: "Sales", amount: 10, count: 1},
							{type: "Renewals", amount: 20, count: 2},
							{type: "Upgrades", amount: 30, count: 3},
							{type: "Refunds", amount: -40, count: -4}
						]
					},
					expected = (
						<tr>
							<td className="addon-sales-tier-name">10</td>
							<td key="Sales">
								<AddOnSalesCount count={1}/>
								<AddOnSalesAmount amount={10}/>
							</td>
							<td key="Renewals">
								<AddOnSalesCount count={2}/>
								<AddOnSalesAmount amount={20}/>
							</td>
							<td key="Upgrades">
								<AddOnSalesCount count={3}/>
								<AddOnSalesAmount amount={30}/>
							</td>
							<td key="Refunds">
								<AddOnSalesCount count={-4}/>
								<AddOnSalesAmount amount={-40}/>
							</td>
							<td>
								<AddOnSalesCount count={2}/>
								<AddOnSalesAmount amount={20}/>
							</td>
						</tr>
					);

		expect(shallow(<AddOnSalesTier tier={tier}/>)).toContainReact(expected);
	});
});
