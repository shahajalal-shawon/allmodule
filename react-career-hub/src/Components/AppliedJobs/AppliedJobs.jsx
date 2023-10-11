import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/localsotrage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] =useState([]);
    const [displayJobs, setDisplayJobs] =useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remodeJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        }
    }

    
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.inclides(job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobsApplied, jobs, storedJobIds);
        }    
    }, [jobs])


    return (
        <div>
            <h2>The Jobs i applied: {appliedJobs.length}</h2>
             <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} : {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>


        </div>
    );
};

export default AppliedJobs;