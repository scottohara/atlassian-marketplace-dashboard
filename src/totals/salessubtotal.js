import React, { Component } from "react";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import "./salessubtotal.css";

export default class AddOnSalesSubtotal extends Component {
	render() {
		const {type, amount, count} = this.props;

		return (
			<div className="addon-sales-subtotal">
				<AddOnSalesAmount amount={amount}/>
				<AddOnSalesType type={type}/>
				<AddOnSalesCount count={count}/>
			</div>
		);
	}
}