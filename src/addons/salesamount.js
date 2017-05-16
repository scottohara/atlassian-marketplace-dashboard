import React from "react";

const AddOnSalesAmount = ({amount}) => (<div className="addon-sales-amount">{+amount === 0 || isNaN(+amount) ? "-" : amount.toLocaleString("en-au", {style: "currency", currency: "AUD"})}</div>);

export default AddOnSalesAmount;