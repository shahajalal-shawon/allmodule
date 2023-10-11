import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, 
      job_description, job_responsibility, educational_requirements,experiences } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-4 font-extrabold border rounded-lg border-[#7E90EF] mr-4 text-[#7E90EF]">{remote_or_onsite}</button>
        <button className="px-5 py-4 font-extrabold border rounded-lg border-[#7E90EF] mr-4 text-[#7E90EF]">{job_type}</button>
    </div>
    <div className="mt-4 flex gap-6">
        <h2 className="flex gap-2 font-bold"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
        <h2 className="flex gap-2 font-bold"> <AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
 );
};

export default Job;