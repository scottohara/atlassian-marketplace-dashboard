import React from "react";
import { shallow } from "enzyme";
import Login from "./login";

describe("<Login>", () => {
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

	it("renders a login form", () => {
		const userName = "test user",
					password = "test password",
					expected = (
						<form className="login" onSubmit>
							<label>
								Atlassian ID:
								<input type="text" value={userName}/>
							</label>
							<label>
								Password:
								<input type="password" value={password}/>
							</label>
							<input type="submit" value="Login"/>
							<button>Cancel</button>
						</form>
					);

		window.localStorage.setItem("atlassian-id", userName);
		window.localStorage.setItem("atlassian-password", password);

		expect(shallow(<Login isOpen={true}/>)).toContainReact(expected);
	});
});