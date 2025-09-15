import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import headerImg from "../assets/smile.png";

export default function HomeHeader() {
  return (
    <header className="grow flex flex-col lg:flex-row mt-4">
      <section className="lg:w-1/2 flex flex-col p-4">
        <h1 className="text-center md:text-left font-poppins-bold font-bold text-4xl md:text-8xl mt-4">
          We make recruitment happen
        </h1>
        <p className="text-center md:text-left mt-10 lg:mt-12 font-poppins-regular px-3">
          Whether you are looking for your next journey or you are looking to
          work with people who deliver, you can rely on us to find your fit.
        </p>
        <div className="flex flex-col gap-5 md:gap-2 md:flex-row mt-10 lg:mt-11">
          <Link className="px-2 md:w-1/3 lg:w-1/2" to="/find-your-job">
            <button className="w-full border-2 border-slate-500 p-4 font-poppins-regular flex justify-between items-center cursor-pointer">
              <span>Find your next job</span>
              <FaArrowRightLong className="text-2xl" />
            </button>
          </Link>
          <Link className="px-2 md:w-1/3 lg:w-1/2" to="/find-your-hire">
            <button className="w-full border-2 border-slate-500 p-4 font-poppins-regular flex justify-between items-center cursor-pointer">
              <span>Find your next hire</span>
              <FaArrowRightLong className="text-2xl" />
            </button>
          </Link>
        </div>
      </section>
      <section className="lg:w-1/2 lg:flex lg:justify-center lg:items-end">
        <img
          className="w-full h-full lg:w-3/4 lg:h-auto sm:object-cover "
          src={headerImg}
          alt="job"
        />
      </section>
    </header>
  );
}
