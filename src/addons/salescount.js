import React from "react";

const AddOnSalesCount = ({count}) => (<div className="addon-sales-count">{+count > 0 ? `(${count})` : ''}</div>);

export default AddOnSalesCount;