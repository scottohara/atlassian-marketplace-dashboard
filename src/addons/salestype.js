import React from "react";
import PropTypes from "prop-types";

const AddOnSalesType = ({type}) => (<div className="addon-sales-type">{type}</div>);

AddOnSalesType.propTypes = {
	type: PropTypes.oneOfType([
		PropTypes.oneOf(["New", "Renewal", "Upgrade", "Refund"]),
		PropTypes.oneOf(["Cloud", "Server", "Data Center"])
	])
};

export default AddOnSalesType;