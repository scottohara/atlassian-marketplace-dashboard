import React, { Component } from "react";
import { totalFromSubtotals, AddOnSalesTotal, AddOnSalesSubtotals } from "../totals";
import { subtotalFromPlatforms, AddOnSalesPlatforms } from "../platforms";
import "./salescard.css";

export default class AddOnSalesCard extends Component {
	render() {
		const {addon} = this.props,
					subtotals = subtotalFromPlatforms(addon.platforms),
					{amount, count} = totalFromSubtotals(subtotals);

		return (
			<div className="addon-sales-card">
				<h1>{addon.name}</h1>
				<AddOnSalesTotal logo={addon.logoUrl} amount={amount} count={count}/>
				<AddOnSalesSubtotals subtotals={subtotals}/>
				<AddOnSalesPlatforms platforms={addon.platforms}/>
			</div>
		);
	}
}