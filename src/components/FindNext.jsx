import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FindNext() {
  return (
    <section className="bg-secondary">
      <div className="container lg:flex *:font-poppins-extraLight *:text-white ">
        <div className="flex flex-col lg:gap-3 lg:py-18 items-center py-8 lg:w-1/2 ">
          <h2 className="my-4 md:text-4xl">Find your next Job</h2>
          <Link
            to="/find-your-job"
            className="w-full h-14 flex items-center text-2xl md:text-4xl justify-center">
            <FaArrowRightLong />
          </Link>
        </div>

        <div className="flex flex-col lg:gap-3 lg:py-18 items-center py-8 lg:w-1/2 ">
          <h2 className="my-4 md:text-4xl">Find your next hire</h2>
          <Link
            className="w-full h-14 flex items-center text-2xl md:text-4xl justify-center"
            to="/find-your-hire">
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
}
