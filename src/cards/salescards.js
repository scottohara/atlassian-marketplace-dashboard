import React from "react";
import PropTypes from "prop-types";
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

AddOnSalesCards.propTypes = {
	vendors: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		logoUrl: PropTypes.string.isRequired,
		addons: PropTypes.arrayOf(AddOnSalesCard.propTypes.addon).isRequired
	}))
};

export default AddOnSalesCards;