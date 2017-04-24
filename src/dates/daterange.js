import React, { Component } from "react";
import DateRangeService from "./daterangeservice";
import "./daterange.css";

export default class DateRange extends Component {
	constructor(props) {
		super(props);

    const {startDate, endDate} = DateRangeService;

    this.state = {startDate, endDate};

		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.refresh = this.refresh.bind(this);
	}

	get isRangeSet() {
		const {startDate, endDate} = this.state;
		return (startDate && startDate !== "" && endDate && endDate !== "") ? true : false;
	}

	handleStartDateChange(event) {
		const startDate = event.target.value;
		let {endDate} = this.state;

		if (startDate > endDate) {
			endDate = "";
		}

		this.setState({startDate, endDate});
	}

	handleEndDateChange(event) {
		const endDate = event.target.value;
		let {startDate} = this.state;

		if (startDate > endDate) {
			startDate = "";
		}

		this.setState({startDate, endDate});
	}

	refresh(event) {
    DateRangeService.startDate = this.state.startDate;
		DateRangeService.endDate = this.state.endDate;
		this.props.refresh();
		event.preventDefault();
	}

	render() {
		const {startDate, endDate} = this.state;

		return (
			<form className="date-range-form" onSubmit={this.refresh}>
				<input type="date" value={startDate} onChange={this.handleStartDateChange}/>
				<span className="range-arrow">&#x2192;</span>
				<input type="date" value={endDate} onChange={this.handleEndDateChange}/>
				<input className="refresh-button" type="submit" value="&#x21bb;" disabled={!this.isRangeSet}/>
			</form>
		);
	}
}