import React from "react";
import PropTypes from "prop-types";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import { AddOnSalesTier } from "../tiers";
import { totalFromSubtotals, subtotalsObjectToArray, AddOnSalesSubtotals } from "../totals";
import { subtotalFromTiers } from "../tiers";
import "./salesplatform.css";

const AddOnSalesPlatform = ({platform}) => {
		const subtotals = subtotalsObjectToArray(subtotalFromTiers(platform.tiers)),
					{amount, count} = totalFromSubtotals(subtotals);

		return (
			<div className="addon-sales-platform">
				<div className="addon-sales-platform-totals">
					<AddOnSalesAmount amount={amount}/>
					<AddOnSalesType type={platform.name}/>
					<AddOnSalesCount count={count}/>
				</div>
				<AddOnSalesSubtotals subtotals={subtotals}/>
			</div>
		);
}

AddOnSalesPlatform.propTypes = {
	platform: PropTypes.shape({
		name: PropTypes.oneOf(["Cloud", "Server"]).isRequired,
		tiers: PropTypes.arrayOf(AddOnSalesTier.propTypes.tier).isRequired
	}).isRequired
};

export default AddOnSalesPlatform;