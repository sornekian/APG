import { deleteJob } from "../../utilities/jobs-api";
import './JobCard.css';

export default function JobCard({ job, user, handleJobDelete }) {

    async function handleDelete(jobId) {
        if (user._id === job.user) {
            await deleteJob(jobId);
            handleJobDelete(jobId);
        } else {
            // Handle unauthorized user
            console.log('Unauthorized user');
        }
    }

    if (user._id === job.user) {
        console.log('i made this')
    }

    return (
        <div className="postedjob-container">
            <h3>Date: {new Date(job.createdAt).toLocaleString()}</h3>
            <p>Name of Company: {job.companyName}</p>
            <p>Line of Work: {job.lineOfWork}</p>
            <p>Position: {job.position}</p>
            <p>Years of Experience Required: {job.yrsOfExp}</p>
            <p>Send Resume To: <a href="mailto:{job.email}">{job.email}</a></p>
            {user._id === job.user && (
                <button onClick={() => handleDelete(job._id)}>Delete</button>
            )}
        </div>
    );
}