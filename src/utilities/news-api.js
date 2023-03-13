import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export async function getNews() {
	return sendRequest(BASE_URL)
}
