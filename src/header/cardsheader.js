import React, { Component } from "react";
import { DateRange } from "../dates";
import { Login } from "../login";
import "./cardsheader.css";

export default class AddOnCardsHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {login: false};
		this.handleSettingsClick = this.handleSettingsClick.bind(this);
		this.toggleLogin = this.toggleLogin.bind(this);
	}

	handleSettingsClick(event) {
		event.preventDefault();
		this.toggleLogin();
	}

	toggleLogin() {
		this.setState({login: !this.state.login});
	}

	render() {
		const {refresh, loading, totalTransactions, progress} = this.props;

		const numTransactions = Object.values(progress).reduce((total, num) => total + num, 0);
		const percentComplete = totalTransactions ? numTransactions / totalTransactions : 1;

		console.log(totalTransactions, numTransactions, percentComplete);

		return (
			<header>
				<DateRange refresh={refresh} loading={loading}/>
				<button className="settings-menu" onClick={this.handleSettingsClick}>&#9776;</button>
				{ percentComplete < 2 && <progress value={percentComplete}></progress> }
				<Login isOpen={this.state.login} close={this.toggleLogin}/>
			</header>
		);
	}
}