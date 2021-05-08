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
		this.state = {vendors: [], loading: false, progress: 0};
	}

	componentDidMount() {
		this.refresh();
	}

	setProgress(progress) {
		this.setState({ progress });
	}

	refresh() {
		this.setState({loading: true, progress: 0});
		DataService.refresh(this.setProgress).then(vendors => this.setState({vendors, loading: false}));
	}

	render() {
		const {vendors, loading, progress} = this.state;

		return (
			<div>
				<AddOnCardsHeader refresh={this.refresh} loading={loading} progress={progress}/>
				<AddOnSalesCards vendors={vendors}/>
			</div>
		);
	}
}
