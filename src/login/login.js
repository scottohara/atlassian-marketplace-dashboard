import React, { Component } from "react";
import LoginService from "./loginservice";
import "./login.css";

export default class Login extends Component {
	constructor(props) {
		super(props);

    const {userName, password} = LoginService;

    this.state = {userName, password};

		this.handleUserNameChange = this.handleUserNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.login = this.login.bind(this);
		this.cancel = this.cancel.bind(this);
		this.close = this.close.bind(this);
	}

	handleUserNameChange(event) {
		this.setState({userName: event.target.value});
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	login(event) {
		LoginService.userName = this.state.userName;
		LoginService.password = this.state.password;
		this.close(event);
	}

	cancel(event) {
    const {userName, password} = LoginService; // can do?

    this.setState({userName, password});
		this.close(event);
	}

	close(event) {
		event.preventDefault();
		this.props.close();
	}

	render() {
		const {isOpen} = this.props;
		const {userName, password} = this.state;

		return (
			LoginService.isLoggedIn && !isOpen ? null :
				<form className="login" onSubmit={this.login}>
					<label>
						<span>Atlassian ID</span>
						<input type="text" value={userName} onChange={this.handleUserNameChange}/>
					</label>
					<label>
						<span>Password</span>
						<input type="password" value={password} onChange={this.handlePasswordChange}/>
					</label>
					<input type="submit" value="Login"/>
					<button onClick={this.cancel}>Cancel</button>
				</form>
		);
	}
}