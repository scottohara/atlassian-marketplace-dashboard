import React from "react";
import { shallow } from "enzyme";
import CountUp from "react-countup";
import { AddOnLogo, AddOnSalesCount } from "../addons";
import AddOnSalesTotal from "./salestotal";

describe("<AddOnSalesTotal>", () => {
	it("renders the total amount and count", () => {
		const expected = (
		 	<div className="addon-sales-total">
				<AddOnLogo logo="logo.png"/>
				<CountUp className="addon-sales-amount" end={10} duration={2} decimals={2} useEasing={true} useGrouping={true} prefix="$"/>
				<AddOnSalesCount count={1}/>
			</div>
		);

		expect(shallow(<AddOnSalesTotal logo="logo.png" amount={10} count={1}/>)).toContainReact(expected);
	});
});
