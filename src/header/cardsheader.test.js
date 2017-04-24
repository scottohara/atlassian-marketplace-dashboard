import React from "react";
import { shallow } from "enzyme";
import AddOnCardsHeader from "./cardsheader";

describe("<AddOnCardsHeader>", () => {
	it("renders the header", () => {
		const expected = (
						<div/>
					);

		expect(shallow(<AddOnCardsHeader/>)).toContainReact(expected);
	});
});