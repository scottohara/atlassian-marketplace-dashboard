import React, { Component } from "react";
import { AddOnSalesType } from "../addons";
import AddOnSalesTier from "./salestier";
import "./salestiers.css";

export default class AddOnSalesTiers extends Component {
	render() {
		const {platform} = this.props;

		return (
			<div className="addon-sales-tiers">
				<AddOnSalesType type={platform.name}/>
				<table>
					<thead>
						<tr>
							<th className="addon-sales-tier-name">Tier</th>
							<th>Sales</th>
							<th>Renewals</th>
							<th>Upgrades</th>
							<th>Refunds</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{platform.tiers.map(tier => <AddOnSalesTier key={tier.name} tier={tier}/>)}
					</tbody>
				</table>
			</div>
		);
	}
}