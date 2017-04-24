import React, { Component } from "react";
import "./logo.css";

export default class AddOnLogo extends Component {
	render() {
		const {logo} = this.props;

		return (
			<img alt="logo" className="addon-logo" src={logo}/>
		);
	}
}