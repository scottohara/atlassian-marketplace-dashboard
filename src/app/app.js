import React, { Component } from "react";
import { DataService } from "../data";
import { AddOnCardsHeader } from "../header";
import { AddOnSalesCards } from "../cards";
import "./app.css";


export default class App extends Component {
	constructor(props) {
		super(props);
		this.refresh = this.refresh.bind(this);
		this.state = {vendors: []};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh() {
		DataService.refresh().then(vendors => this.setState({vendors}));
	}

	render() {
		const {vendors} = this.state;

		return (
			<div>
				<AddOnCardsHeader refresh={this.refresh}/>
				<AddOnSalesCards vendors={vendors}/>
			</div>
		);
	}
}
