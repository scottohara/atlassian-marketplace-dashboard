import React from "react";
import AddOnSalesCard from "./salescard";
import "./salescards.css";

const AddOnSalesCards = ({vendors}) => {
		const addons = vendors.length > 0 ? vendors[0].addons : [];

		return (
			<div className="addon-sales-cards">
				{addons.map(addon => <AddOnSalesCard key={addon.name} addon={addon}/>)}
			</div>
		);
}

export default AddOnSalesCards;