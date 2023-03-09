import sendRequest from "./send-request";
const BASE_URL = "/api/jobs";

export async function createJob(jobData) {
	console.log('jobs-api')
	return sendRequest(BASE_URL, 'POST', jobData)
}

export async function getJobs() {
	return sendRequest(BASE_URL)
}