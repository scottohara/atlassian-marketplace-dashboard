import React from "react";
import PropTypes from "prop-types";
import AddOnSalesTier from "./salestier";
import "./salestiers.css";

const AddOnSalesTiers = ({ platform }) => (
	<table>
		<thead>
			<tr>
				<th className="addon-sales-tier-name">Tier</th>
				<th>Sales</th>
				<th>Renewals</th>
				<th>Upgrades</th>
				<th>Downgrades</th>
				<th>Refunds</th>
				<th>Total</th>
			</tr>
		</thead>
		<tbody>
			{platform.tiers.map((tier) => (
				<AddOnSalesTier key={tier.name} tier={tier} />
			))}
		</tbody>
	</table>
);

AddOnSalesTiers.propTypes = {
	platform: PropTypes.shape({
		name: PropTypes.oneOf(["Cloud", "Server", "Data Center"]).isRequired,
		tiers: PropTypes.arrayOf(AddOnSalesTier.propTypes.tier).isRequired,
	}).isRequired,
};

export default AddOnSalesTiers;
