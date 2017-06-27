import React from "react";
import PropTypes from "prop-types";

const AddOnSalesAmount = ({amount}) => (<div className="addon-sales-amount">{+amount === 0 || isNaN(+amount) ? "-" : amount.toLocaleString("en-au", {style: "currency", currency: "AUD"})}</div>);

AddOnSalesAmount.propTypes = {
	amount: PropTypes.number
}

export default AddOnSalesAmount;