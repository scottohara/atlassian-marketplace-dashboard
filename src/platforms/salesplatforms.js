import React from "react";
import PropTypes from "prop-types";
import AddOnSalesPlatform from "./salesplatform";
import "./salesplatforms.css";

const AddOnSalesPlatforms = ({platforms}) => (
	<div className="addon-sales-platforms">
		{platforms.map(platform => <AddOnSalesPlatform key={platform.name} platform={platform}/>)}
	</div>
);

AddOnSalesPlatforms.propTypes = {
	platforms: PropTypes.arrayOf(AddOnSalesPlatform.propTypes.platform).isRequired
}

export default AddOnSalesPlatforms;