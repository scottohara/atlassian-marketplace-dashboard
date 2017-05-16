import React from "react";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import "./salessubtotal.css";

const AddOnSalesSubtotal = ({type, amount, count}) => (
	<div className="addon-sales-subtotal">
		<AddOnSalesAmount amount={amount}/>
		<AddOnSalesType type={type}/>
		<AddOnSalesCount count={count}/>
	</div>
);

export default AddOnSalesSubtotal;