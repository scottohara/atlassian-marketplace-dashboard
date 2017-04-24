import DataService from "./dataservice";

fdescribe("DataService", () => {
	describe("refresh", () => {
		it("should get some data", done => {
			DataService.refresh().then(data => {
				expect(data).toEqual({});
			  done();
			});
		});
	});
});