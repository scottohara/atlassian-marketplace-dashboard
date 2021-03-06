import React, { Component } from "react";
import { DataService } from "../data";
import { AddOnCardsHeader } from "../header";
import { AddOnSalesCards } from "../cards";
import "./app.css";


export default class App extends Component {
	constructor(props) {
		super(props);
		this.refresh = this.refresh.bind(this);
		this.setProgress = this.setProgress.bind(this);
		this.state = { vendors: [], loading: false, totalTransactions: 0, progress: {} };
	}

	componentDidMount() {
		this.refresh();
	}

	setProgress(totalTransactions, addonKey, numTransactions) {
		let { progress } = this.state;
		progress[addonKey] = numTransactions;
		this.setState({ totalTransactions, progress });
	}

	refresh() {
		this.setState({ loading: true, progress: {} });
		DataService.refresh(this.setProgress).then(vendors => this.setState({vendors, loading: false}));
	}

	render() {
		const {vendors, loading, totalTransactions, progress} = this.state;

		return (
			<div>
				<AddOnCardsHeader refresh={this.refresh} loading={loading} totalTransactions={totalTransactions} progress={progress}/>
				<AddOnSalesCards vendors={vendors}/>
			</div>
		);
	}
}
