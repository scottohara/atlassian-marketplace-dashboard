import React from "react";
import { shallow } from "enzyme";
import AddOnSalesType from "./salestype";

describe("<AddOnSalesType>", () => {
	it("renders the type", () => {
		const expected = <div className="addon-sales-type">Sales</div>;
		expect(shallow(<AddOnSalesType type="Sales"/>)).toContainReact(expected);
	});
});