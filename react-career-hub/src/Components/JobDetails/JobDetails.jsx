import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utilities/localsotrage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }
    
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4 space-x-1">
                <div className=" md:col-span-3 ">
                    <h2><span className="font-bold">Job Descriptions:</span> {job.job_description}</h2>
                    <h2><span className="font-bold">Job Responsibillity:</span> {job.job_responsibility}</h2>
                    <h2><span className="font-bold">Educational Requirements:</span> <br />{job.educational_requirements}</h2>
                    <h2><span className="font-bold">Experiences:</span> <br /> {job.experiences}</h2>
                </div>
                <div>
                    <div className="bg-[#7e90fe] rounded-md bg-opacity-50 p-6">
                        {/* <h2>Job Details <br />  <br /> </h2> */}
                        <div className="space-y-2">
                            <h2 className="font-bold border-b">Job Details</h2>
                            <p>Salary: {job.salary}</p>
                            <p>Job Title: {job.job_title}</p>

                        </div>
                        <div className="mt-6  space-y-2 ">
                            <h2 className="font-bold border-b ">Contact Information</h2>
                            <p>Phone: {job.contact_information.phone}</p>
                            <p>Emai: {job.contact_information.email}</p>
                            <p>Address: {job.contact_information.address}</p>
                        </div>
                    </div>

                    <div className="mt-4 mb-14">
                            <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                        </div>

                </div>
            </div>
               
            <ToastContainer />
        
        </div>
    );
};

export default JobDetails;