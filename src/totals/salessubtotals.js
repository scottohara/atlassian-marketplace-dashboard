import React, { Component } from "react";
import AddOnSalesSubtotal from "./salessubtotal";
import "./salessubtotals.css";

export default class AddOnSalesSubtotals extends Component {
	render() {
		const {subtotals} = this.props;

		return (
			<div className="addon-sales-subtotals">
				{subtotals.map(subtotal => {
					const {type, amount, count} = subtotal;

					return (
						<AddOnSalesSubtotal key={type} type={type} amount={amount} count={count}/>
					)
				})}
			</div>
		);
	}
}