import React, { Component } from "react";
import CountUp from "react-countup";
import { AddOnLogo, AddOnSalesCount } from "../addons";
import "./salestotal.css";

export default class AddOnSalesTotal extends Component {
	render() {
		const {logo, amount, count} = this.props;

		return (
			<div className="addon-sales-total">
				<AddOnLogo logo={logo}/>
				<CountUp className="addon-sales-amount" end={amount} duration={2} decimals={2} useEasing={true} useGrouping={true} prefix="$"/>
				<AddOnSalesCount count={count}/>
			</div>
		);
	}
}