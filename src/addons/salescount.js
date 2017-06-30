import React from "react";
import PropTypes from "prop-types";

const AddOnSalesCount = ({count}) => (<div className="addon-sales-count">{+count > 0 ? `(${count})` : ''}</div>);

AddOnSalesCount.propTypes = {
	count: PropTypes.number.isRequired
};

export default AddOnSalesCount;