import Nav from "../components/Nav";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineUpload } from "react-icons/ai";
import { Link } from "react-router";

function FindJobPage() {
  return (
    <>
      <Nav />
      <header className="bg-findjob mt-13 min-h-[90vh] overflow-hidden">
        <div className="container ">
          <h1 className="font-poppins-bold mt-6 text-secondary md:mt-12 mb-2 font-semibold text-[40px] md:text-8xl text-center">
            Opportunities.
          </h1>
          <p className="text-center font-poppins-regular text-xl md:text-3xl py-2 md:pt-6">
            Two easy way to find them.
          </p>

          <section className="flex mt-4 px-3 md:px-0 flex-col gap-4 md:gap-8 md:mt-8 md:flex-row md:justify-center">
            <div className="bg-white md:px-12 lg:w-[400px]">
              <div className="flex pt-10 pb-6 justify-center items-center">
                <LuUserRoundSearch className="text-4xl" />
              </div>
              <h2 className="text-center font-poppins-regular text-slate-600 text-xl">
                {" "}
                Search available jobs{" "}
              </h2>
              <Link
                to="/jobs"
                className="w-3/5 text-white bg-secondary mx-auto  font-poppins-bold py-2 px-3 my-4 flex justify-center items-center gap-2">
                <span>Search Jobs</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="bg-white md:px-12 lg:w-[400px]">
              <div className="flex pt-10 pb-6 justify-center items-center">
                <AiOutlineUpload className="text-4xl" />
              </div>
              <h2 className="text-center font-poppins-regular text-slate-600 text-xl">
                {" "}
                Upload your resume{" "}
              </h2>
              <Link className="w-3/5 text-white bg-secondary mx-auto  font-poppins-bold py-2 px-3 my-4 flex justify-center items-center gap-2">
                <span>Upload</span>
                <FaArrowRight />
              </Link>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}

export default FindJobPage;
