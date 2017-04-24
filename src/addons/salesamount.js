import React, { Component } from "react";

export default class AddOnSalesAmount extends Component {
	render() {
		const {amount} = this.props;

		return (
			<div className="addon-sales-amount">{+amount === 0 || isNaN(+amount) ? "-" : amount.toLocaleString("en-au", {style: "currency", currency: "AUD"})}</div>
		);
	}
}