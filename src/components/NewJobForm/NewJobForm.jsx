import { useState } from 'react';
import { createJob } from '../../utilities/jobs-api';
import './NewJobForm.css'

export default function NewJobForm({ user, setJobs }) {
    const [newJobs, setNewJobs] = useState({
        companyName: '',
        lineOfWork: '',
        position: '',
        yrsOfExp: '',
        email: '',
        error: ''
    });

    function handleChange(evt) {
        const newFormData = {
            ...newJobs,
            [evt.target.name]: evt.target.value
        };
        setNewJobs(newFormData);
    }

    const handleAddJob = async (evt) => {
        evt.preventDefault();
        try {
            const job = await createJob({
                companyName: newJobs.companyName,
                lineOfWork: newJobs.lineOfWork,
                position: newJobs.position,
                yrsOfExp: newJobs.yrsOfExp,
                email: newJobs.email,
                user: user._id
            });
            setJobs(prevJobs => [...prevJobs, job]);
            setNewJobs({
                companyName: '',
                lineOfWork: '',
                position: '',
                yrsOfExp: '',
                email: ''
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="createjob-container">
            <h3>Fill Out the Form to Create a New Job!</h3>
            <form onSubmit={handleAddJob}>
                <label>Company Name:</label>
                <input type="text" name="companyName" value={newJobs.companyName} onChange={handleChange} required />
                <label>Line of Work:</label>
                <input type="text" name="lineOfWork" value={newJobs.lineOfWork} onChange={handleChange} required />
                <label>Position Available:</label>
                <input type="text" name="position" value={newJobs.position} onChange={handleChange} required />
                <label>Years of Experience Required:</label>
                <input type="text" name="yrsOfExp" value={newJobs.yrsOfExp} onChange={handleChange} required />
                <label>Send Resume To:</label>
                <input type="email" name="email" value={newJobs.email} onChange={handleChange} required />
                <button type="submit">Create Job Opportunity</button>
            </form>
        </div>
    );
}