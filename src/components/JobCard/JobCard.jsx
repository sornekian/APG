export default function JobCard({ job }) {
    return (
        <div>
            <h3>Date: {new Date(job.createdAt).toLocaleString()}</h3>
            <p>Name of Company: {job.companyName}</p>
            <p>Line of Work: {job.lineOfWork}</p>
            <p>Position: {job.position}</p>
            <p>Years of Experience Required: {job.yrsOfExp}</p>
            <p>Company Contact Email: {job.email}</p>
        </div>
    );
}