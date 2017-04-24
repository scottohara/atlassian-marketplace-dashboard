import React from "react";
import { shallow } from "enzyme";
import AddOnLogo from "./logo";

describe("<AddOnLogo>", () => {
	it("renders the logo", () => {
		const expected = <img alt="logo" className="addon-logo" src="logo.png"/>;
		expect(shallow(<AddOnLogo logo="logo.png"/>)).toContainReact(expected);
	});
});