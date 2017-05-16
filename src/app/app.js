import React, { Component } from "react";
import { DataService } from "../data";
import { AddOnCardsHeader } from "../header";
import { AddOnSalesCards } from "../cards";
import "./app.css";


export default class App extends Component {
	constructor(props) {
		super(props);
		this.refresh = this.refresh.bind(this);
		this.state = {vendors: [], loading: false};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh() {
		this.setState({loading: true});
		DataService.refresh().then(vendors => this.setState({vendors, loading: false}));
	}

	render() {
		const {vendors, loading} = this.state;

		return (
			<div>
				<AddOnCardsHeader refresh={this.refresh} loading={loading}/>
				<AddOnSalesCards vendors={vendors}/>
			</div>
		);
	}
}
