import React from "react";
import PropTypes from "prop-types";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
import { AddOnSalesTiers, AddOnSalesTier } from "../tiers";
import { totalFromSubtotals, subtotalsObjectToArray, AddOnSalesSubtotals } from "../totals";
import { subtotalFromTiers } from "../tiers";
import "./salesplatform.css";

const AddOnSalesPlatform = ({platform}) => {
		const subtotals = subtotalsObjectToArray(subtotalFromTiers(platform.tiers)),
					{amount, count} = totalFromSubtotals(subtotals);

		return (
			<div className="addon-sales-platform">
				<div className="addon-sales-platform-totals">
					<AddOnSalesType type={platform.name}/>
					<AddOnSalesAmount amount={amount}/>
					<AddOnSalesCount count={count}/>
				</div>
				<AddOnSalesSubtotals subtotals={subtotals}/>
				<AddOnSalesTiers platform={platform}/>
			</div>
		);
}

AddOnSalesPlatform.propTypes = {
	platform: PropTypes.shape({
		name: PropTypes.oneOf(["Cloud", "Server", "Data Center"]).isRequired,
		tiers: PropTypes.arrayOf(AddOnSalesTier.propTypes.tier).isRequired
	}).isRequired
};

export default AddOnSalesPlatform;