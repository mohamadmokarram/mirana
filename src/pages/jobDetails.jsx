import Nav from "../components/Nav";
import JOBLIST from "../data/jobs";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "../components/Footer";

function JobDetails() {
  const params = useParams();
  const jobId = parseInt(params.jobId);

  const jobInfo = JOBLIST.find(item => item.id === jobId);

  return (
    <>
      <Nav />
      <section className="container mt-18 px-3 mb-10">
        <Link to=".." relative="path" className="inline-block ">
          <div className="w-fit flex items-center font-poppins-regular">
            <FaArrowLeft />
            <span className="text-[14px] ml-2">back to jobs</span>
          </div>
        </Link>

        {/* position */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl my-8 font-poppins-bold">
          {jobInfo.position}
        </h1>

        {/* labels */}
        <div className="flex gap-3 flex-row flex-wrap my-9">
          <p className="flex items-center gap-1 py-1 px-2 bg-slate-100 font-poppins-regular text-[13px] rounded">
            <IoLocationOutline className="text-lg" />
            <span className="capitalize">Location: {jobInfo.city}</span>
          </p>

          <p className="flex items-center gap-1 py-1 px-2 bg-slate-100 font-poppins-regular text-[13px] rounded">
            <MdAccessTime className="text-lg" />
            <span className="capitalize">{jobInfo.postDate}</span>
          </p>
        </div>

        <Link className="flex justify-center items-center gap-3 py-3 bg-secondary font-poppins-bold text-white my-10 md:w-fit md:px-5">
          <span>Apply Now</span>
          <FaArrowRight />
        </Link>

        <p className="font-poppins-regular text-slate-800 font-semibold">
          {jobInfo.industry}
        </p>
        <p className="font-poppins-regular text-slate-800 font-semibold">
          {jobInfo.salary}
        </p>

        {/* responsibilities */}
        <div className="mt-8 md:w-3/4">
          <h2 className=" font-poppins-bold text-lg text-secondary my-2">
            Responsibilities
          </h2>
          {jobInfo.responsibilities.map((res, i) => (
            <p className="font-poppins-regular py-1 text-slate-600" key={i}>
              {res}
            </p>
          ))}
        </div>

        {/* requirements */}
        <div className="mt-8">
          <h2 className="font-poppins-bold text-lg text-secondary my-2">
            Requirements
          </h2>
          {jobInfo.Requirements.map((req, i) => (
            <p className="font-poppins-regular py-1 text-slate-600" key={i}>
              {req}
            </p>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default JobDetails;
