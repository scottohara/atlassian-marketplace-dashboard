import React, { Component } from "react";

export default class AddOnSalesCount extends Component {
	render() {
		const {count} = this.props;

		return (
			<div className="addon-sales-count">{+count > 0 ? `(${count})` : ''}</div>
		);
	}
}