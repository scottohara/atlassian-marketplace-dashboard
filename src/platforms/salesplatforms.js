import React from "react";
import { AddOnSalesTiers } from "../tiers";
import AddOnSalesPlatform from "./salesplatform";
import "./salesplatforms.css";

const AddOnSalesPlatforms = ({platforms}) => (
	<div className="addon-sales-platforms">
		{platforms.map(platform => <AddOnSalesPlatform key={platform.name} platform={platform}/>)}
		{platforms.map(platform => <AddOnSalesTiers key={platform.name} platform={platform}/>)}
	</div>
);

export default AddOnSalesPlatforms;