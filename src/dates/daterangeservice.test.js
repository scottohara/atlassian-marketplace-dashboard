import DateRangeService from "./daterangeservice";

describe("DateRangeService", () => {
	beforeEach(() => {
		DateRangeService.startDate = null;
		DateRangeService.endDate = null;
	});

	describe("startDate", () => {
		const startDate = new Date();

		it("should set & get the start date", () => {
			DateRangeService.startDate = startDate;
			expect(DateRangeService.startDate).toEqual(startDate);
		});
	});

	describe("endDate", () => {
		const endDate = new Date();

		it("should set & get the end date", () => {
			DateRangeService.endDate = endDate;
			expect(DateRangeService.endDate).toEqual(endDate);
		});
	});
});