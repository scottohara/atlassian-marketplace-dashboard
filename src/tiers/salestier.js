import React from "react";
import PropTypes from "prop-types";
import { AddOnSalesAmount, AddOnSalesCount } from "../addons";
import { totalFromSubtotals } from "../totals";
import "./salestier.css";

const AddOnSalesTier = ({tier}) => {
		const {amount, count} = totalFromSubtotals(tier.subtotals);

		return (
			<tr>
				<td className="addon-sales-tier-name">{tier.name}</td>
				{tier.subtotals.map(subtotal => {
					const {type, amount, count} = subtotal;

					return (
						<td key={type}>
							<AddOnSalesCount count={count}/>
							<AddOnSalesAmount amount={amount}/>
						</td>
					);
				})}
				<td>
					<AddOnSalesCount count={count}/>
					<AddOnSalesAmount amount={amount}/>
				</td>
			</tr>
		);
}

AddOnSalesTier.propTypes = {
	tier: PropTypes.shape({
		name: PropTypes.string.isRequired,
		subtotals: PropTypes.arrayOf(PropTypes.shape({
			type: PropTypes.oneOf(["New", "Renewal", "Upgrade", "Refund"]).isRequired,
			amount: PropTypes.number,
			count: PropTypes.number
		})).isRequired
	}).isRequired
};

export default AddOnSalesTier;