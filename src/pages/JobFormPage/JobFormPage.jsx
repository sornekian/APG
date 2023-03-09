import { useState, useEffect } from 'react';
import { getJobs } from '../../utilities/jobs-api';
import NewJobForm from '../../components/NewJobForm/NewJobForm';
import JobCard from '../../components/JobCard/JobCard';

export default function JobsPage({ user }) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getAllJobs() {
            const jobs = await getJobs();
            setJobs(jobs);

        }
        getAllJobs();
    }, []);

    async function handleJobDelete(jobId) {
        const jobs = await getJobs();
        setJobs(jobs);
    }

    return (
        <div>
            {jobs ? (
                <>
                    <h2>Available Jobs</h2>
                    {jobs.map((job, idx) => (
                        <JobCard job={job} key={idx} handleJobDelete={handleJobDelete} />
                    ))}
                </>
            ) : (
                <h2>No Jobs Yet!</h2>
            )}
            <NewJobForm user={user} setJobs={setJobs} />
        </div>
    );
}
