import React from "react";
import AddOnSalesSubtotal from "./salessubtotal";
import "./salessubtotals.css";

const AddOnSalesSubtotals = ({subtotals}) => (
	<div className="addon-sales-subtotals">
		{subtotals.map(subtotal => {
			const {type, amount, count} = subtotal;

			return (
				<AddOnSalesSubtotal key={type} type={type} amount={amount} count={count}/>
			)
		})}
	</div>
);

export default AddOnSalesSubtotals;