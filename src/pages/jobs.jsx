import Nav from "../components/Nav";
import JOBLIST from "../data/jobs";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../components/Footer";

function Jobspage() {
  return (
    <>
      <Nav />
      <section className="container mt-18 px-4 md:px-0 mb-18">
        <h2 className="font-poppins-regular text-xl text-slate-600 mb-4">
          {JOBLIST.length} results
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {JOBLIST.map(job => (
            <Link
              className="col-span-3 md:col-span-1"
              to={`/jobs/${job.id}`}
              key={job.id}>
              <article className="flex flex-col md:h-[240px] lg:h-auto border border-slate-300 font-poppins-regular rounded-sm p-4">
                <h2 className="text-xl">{job.position}</h2>
                <h4 className="capitalize text-sm my-2">{job.city}</h4>
                <h6 className="text-[13px] p-1 rounded-sm bg-slate-100 w-fit mb-8 md:mb-0">
                  {job.category}
                </h6>

                <div className="mt-auto lg:mt-22 flex flex-row justify-between md:pr-4">
                  <span className="text-[13px] text-slate-400">
                    {job.postDate}
                  </span>
                  <FaArrowRightLong />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jobspage;
