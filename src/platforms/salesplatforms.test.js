import React from "react";
import { shallow } from "enzyme";
import { AddOnSalesTiers } from "../tiers";
import AddOnSalesPlatform from "./salesplatform";
import AddOnSalesPlatforms from "./salesplatforms"

describe("<AddOnSalesPlatforms>", () => {
	it("renders all platforms", () => {
		const platforms = [
						{name: "Cloud"},
						{name: "Server"}
					],
					expected = (
						<div className="addon-sales-platforms">
							<AddOnSalesPlatform key="Cloud" platform={platforms[0]}/>
							<AddOnSalesPlatform key="Server" platform={platforms[1]}/>
							<AddOnSalesTiers key="Cloud" platform={platforms[0]}/>
							<AddOnSalesTiers key="Server" platform={platforms[1]}/>
						</div>
					);

		expect(shallow(<AddOnSalesPlatforms platforms={platforms}/>)).toContainReact(expected);
	});
});