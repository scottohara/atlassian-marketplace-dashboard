import React from "react";
import { AddOnSalesAmount, AddOnSalesCount, AddOnSalesType } from "../addons";
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

export default AddOnSalesPlatform;