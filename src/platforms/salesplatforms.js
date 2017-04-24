import React, { Component } from "react";
import { AddOnSalesTiers } from "../tiers";
import AddOnSalesPlatform from "./salesplatform";
import "./salesplatforms.css";

export default class AddOnSalesPlatforms extends Component {
	render() {
		const {platforms} = this.props;

		return (
			<div className="addon-sales-platforms">
				{platforms.map(platform => <AddOnSalesPlatform key={platform.name} platform={platform}/>)}
				{platforms.map(platform => <AddOnSalesTiers key={platform.name} platform={platform}/>)}
			</div>
		);
	}
}