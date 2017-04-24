import React from "react";
import { shallow } from "enzyme";
import AddOnSalesAmount from "./salesamount";

describe("<AddOnSalesAmount>", () => {
	let amount,
			expected;

	describe("amount is non-zero", () => {
		it("renders a currency formatted number", () => {
			amount = 123;
			expected = "$123.00";
		});
	});

	describe("amount is zero", () => {
		it("renders a dash", () => {
			amount = 0;
			expected = "-";
		});
	});

	describe("amount is undefined", () => {
		it("renders a dash", () => {
			expected = "-";
		});
	});

	describe("amount is NaN", () => {
		it("renders a dash", () => {
			amount = NaN;
			expected = "-";
		});
	});

	afterEach(() => {
		expected = <div className="addon-sales-amount">{expected}</div>;
		expect(shallow(<AddOnSalesAmount amount={amount}/>)).toContainReact(expected);
	});
});