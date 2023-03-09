import sendRequest from "./send-request";
const BASE_URL = "/api/jobs";

export async function createJob(jobData) {
	return sendRequest(BASE_URL, 'POST', jobData)
}

export async function getJobs() {
	return sendRequest(BASE_URL)
}

export async function deleteJob(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function getJob(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}