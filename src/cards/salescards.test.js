import React from "react";
import { shallow } from "enzyme";
import AddOnSalesCard from "./salescard";
import AddOnSalesCards from "./salescards";
import addons from "../testdata";

describe("<AddOnSalesCards>", () => {
	it("renders cards for all addons", () => {
		const expected = (
			<div className="addon-sales-cards">
				<AddOnSalesCard key={addons[0].name} addon={addons[0]}/>
				<AddOnSalesCard key={addons[1].name} addon={addons[1]}/>
				<AddOnSalesCard key={addons[2].name} addon={addons[2]}/>
				<AddOnSalesCard key={addons[3].name} addon={addons[3]}/>
			</div>
		);

		expect(shallow(<AddOnSalesCards/>)).toContainReact(expected);
	});
});