import React from "react";
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

export default AddOnSalesTier;