import React from "react";
import { shallow } from "enzyme";
import AddOnSalesCount from "./salescount";

describe("<AddOnSalesCount>", () => {
	let count,
			expected;

	describe("count is greater than zero", () => {
		it("renders the parenthesised count", () => {
			count = 1;
			expected = "(1)";
		});
	});

	describe("count is zero", () => {
		it("renders nothing", () => {
			count = 0;
			expected = "";
		});
	});

	describe("count is undefined", () => {
		it("renders nothing", () => {
			expected = "";
		});
	});

	afterEach(() => {
		expected = <div className="addon-sales-count">{expected}</div>;
		expect(shallow(<AddOnSalesCount count={count}/>)).toContainReact(expected);
	});
});