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

    return (
        <div>
            <NewJobForm user={user} setJobs={setJobs} />
            {jobs.length > 0 ? (
                <>
                    <h2>Available Jobs</h2>
                    {jobs.map((job, idx) => (
                        <JobCard job={job} key={idx} />
                    ))}
                </>
            ) : (
                <h2>No Jobs Yet!</h2>
            )}
        </div>
    );
}
