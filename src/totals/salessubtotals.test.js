import React from "react";
import { shallow } from "enzyme";
import AddOnSalesSubtotal from "./salessubtotal";
import AddOnSalesSubtotals from "./salessubtotals";

describe("<AddOnSalesSubtotals>", () => {
	it("renders a set of subtotals", () => {
		const subtotals = [
						{type: "Sales", amount: 10, count: 1},
						{type: "Renewals", amount: 20, count: 2},
						{type: "Upgrades", amount: 30, count: 3},
						{type: "Refunds", amount: -40, count: -4}
					],
					expected = (
						<div className="addon-sales-subtotals">
							<AddOnSalesSubtotal key="Sales" type="Sales" amount={10} count={1}/>
							<AddOnSalesSubtotal key="Renewals" type="Renewals" amount={20} count={2}/>
							<AddOnSalesSubtotal key="Upgrades" type="Upgrades" amount={30} count={3}/>
							<AddOnSalesSubtotal key="Refunds" type="Refunds" amount={-40} count={-4}/>
						</div>
					);

		expect(shallow(<AddOnSalesSubtotals subtotals={subtotals}/>)).toContainReact(expected);
	})
});