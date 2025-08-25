const USER_NAME = "atlassian-id",
	PASSWORD = "atlassian-password",
	VENDOR_ID = "atlassian-vendor-id",
	API_URL = "atlassian-marketplace-api-url",
	storage = "undefined" === typeof window ? null : window.localStorage;

export const settings = $state({
	userName: storage?.getItem(USER_NAME) ?? "",
	password: storage?.getItem(PASSWORD) ?? "",
	vendorId: storage?.getItem(VENDOR_ID) ?? "",
	apiUrl: storage?.getItem(API_URL) ?? "https://marketplace.atlassian.com",
});

export function saveSettings({
	userName,
	password,
	vendorId,
	apiUrl,
}: typeof settings): void {
	storage?.setItem(USER_NAME, userName);
	storage?.setItem(PASSWORD, password);
	storage?.setItem(VENDOR_ID, vendorId);
	storage?.setItem(API_URL, apiUrl);
}
