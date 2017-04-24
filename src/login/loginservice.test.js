import LoginService from "./loginservice";

const userName = "test user",
			password = "test password";

describe("LoginService", () => {
	beforeEach(() => {
		Object.defineProperty(window, 'localStorage', {
			value: {
				getItem(key) {
					return this[key];
				},

				setItem(key, value) {
					this[key] = value;
				}
			},
			writable: true
		});
	});

	describe("userName", () => {
		it("should get the user name from local storage", () => {
			window.localStorage.setItem(LoginService.USER_NAME, userName);
			expect(LoginService.userName).toEqual(userName);
		});

		it("should set the user name in local storage", () => {
			LoginService.userName = userName;
			expect(window.localStorage.getItem(LoginService.USER_NAME)).toEqual(userName);
		});
	});

	describe("password", () => {
		it("should get the password from local storage", () => {
			window.localStorage.setItem(LoginService.PASSWORD, password);
			expect(LoginService.password).toEqual(password);
		});

		it("should set the password in local storage", () => {
			LoginService.password = password;
			expect(window.localStorage.getItem(LoginService.PASSWORD)).toEqual(password);
		});
	});

	describe("isLoggedIn", () => {
		it("should return true if a user name and password has been set", () => {
			window.localStorage.setItem(LoginService.USER_NAME, userName);
			window.localStorage.setItem(LoginService.PASSWORD, password);
			expect(LoginService.isLoggedIn).toEqual(true);
		});

		it("should return false if a user name has not been set", () => {
			window.localStorage.setItem(LoginService.PASSWORD, password);
			expect(LoginService.isLoggedIn).toEqual(false);
		});

		it("should return false if a password has not been set", () => {
			window.localStorage.setItem(LoginService.USER_NAME, userName);
			expect(LoginService.isLoggedIn).toEqual(false);
		});

		it("should return false if neither a user name or password has been set", () => {
			expect(LoginService.isLoggedIn).toEqual(false);
		});
	});
});