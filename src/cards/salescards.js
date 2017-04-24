import React, { Component } from "react";
import AddOnSalesCard from "./salescard";
import "./salescards.css";

export default class AddOnSalesCards extends Component {
	render() {
		const {vendors} = this.props;

		const addons = vendors.length > 0 ? vendors[0].addons : [];

		return (
			<div className="addon-sales-cards">
				{addons.map(addon => <AddOnSalesCard key={addon.name} addon={addon}/>)}
			</div>
		);
	}
}