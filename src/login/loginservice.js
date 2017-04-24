export default class LoginService {
	static get USER_NAME() {
		return "atlassian-id";
	}

	static get PASSWORD() {
		return "atlassian-password";
	}

	static get userName() {
		return window.localStorage.getItem(this.USER_NAME);
	}

	static set userName(value) {
		window.localStorage.setItem(this.USER_NAME, value);
	}

	static get password() {
		return window.localStorage.getItem(this.PASSWORD);
	}

	static set password(value) {
		window.localStorage.setItem(this.PASSWORD, value);
	}

	static get isLoggedIn() {
		return (this.userName && this.password) ? true : false;
	}
}