import React from "react";
import { shallow } from "enzyme";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import AddOnSalesSubtotal from "./salessubtotal";

describe("<AddOnSalesSubtotal>", () => {
	it("renders the subtotal type, amount and count", () => {
		const expected = (
		 	<div className="addon-sales-subtotal">
				<AddOnSalesAmount amount={10}/>
				<AddOnSalesType type="Sales"/>
				<AddOnSalesCount count={1}/>
			</div>
		);

		expect(shallow(<AddOnSalesSubtotal type="Sales" amount={10} count={1}/>)).toContainReact(expected);
	});
});