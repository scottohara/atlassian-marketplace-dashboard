import React from "react";
import PropTypes from "prop-types";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import "./salessubtotal.css";

const AddOnSalesSubtotal = ({type, amount, count}) => (
	<div className="addon-sales-subtotal">
		<AddOnSalesAmount amount={amount}/>
		<AddOnSalesType type={type}/>
		<AddOnSalesCount count={count}/>
	</div>
);

AddOnSalesSubtotal.propTypes = {
	type: AddOnSalesType.propTypes.type,
	amount: PropTypes.number.isRequired,
	count: PropTypes.number.isRequired
};

export default AddOnSalesSubtotal;