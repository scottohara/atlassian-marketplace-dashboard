export default class DateRangeService {
	static get DATE_START() {
		return "atlassian-marketplace-date-start";
	}

	static get DATE_END() {
		return "atlassian-marketplace-date-end";
	}

	static get yesterday() {
		const yesterday = new Date();

		yesterday.setDate(yesterday.getDate() - 1);

		return yesterday.toISOString().substr(0, 10);
	}

	static get startDate() {
		return window.sessionStorage.getItem(this.DATE_START) || this.yesterday;
	}

	static set startDate(value) {
		window.sessionStorage.setItem(this.DATE_START, value);
	}

	static get endDate() {
		return window.sessionStorage.getItem(this.DATE_END) || this.yesterday;
	}

	static set endDate(value) {
		window.sessionStorage.setItem(this.DATE_END, value);
	}
}