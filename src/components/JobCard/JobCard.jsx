import { deleteJob } from "../../utilities/jobs-api";

export default function JobCard({ job, handleJobDelete }) {

    async function handleDelete(jobId) {
        await deleteJob(jobId);
        handleJobDelete(jobId);
    }

    return (
        <div>
            <h3>Date: {new Date(job.createdAt).toLocaleString()}</h3>
            <p>Name of Company: {job.companyName}</p>
            <p>Line of Work: {job.lineOfWork}</p>
            <p>Position: {job.position}</p>
            <p>Years of Experience Required: {job.yrsOfExp}</p>
            <p>Company Contact Email: <a href="mailto:{job.email}">{job.email}</a></p>
            <button onClick={() => handleDelete(job._id)}>Position Filled</button>
        </div>
    );
}