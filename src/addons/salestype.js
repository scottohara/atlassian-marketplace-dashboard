import React, { Component } from "react";

export default class AddOnSalesType extends Component {
	render() {
		const {type} = this.props;

		return (
			<div className="addon-sales-type">{type}</div>
		);
	}
}