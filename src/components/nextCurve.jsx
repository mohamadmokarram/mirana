import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export default function NextCurve() {
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="lg:w-1/2 bg-[#0f1b38] *:text-slate-200 overflow-hidden border-r border-slate-400">
        <h2 className="text-center font-poppins-bold my-6 text-4xl">
          The next curve
        </h2>
        <p className="font-poppins-regular text-center mb-2 px-3">
          Browse our unique opportunities or let us know you are looking. With
          absolute privacy, together we’ll find your best fit
        </p>
        <Link
          className="flex justify-center gap-4 font-poppins-bold text-2xl mt-3 py-10 items-center mb-4"
          to="/find-your-job">
          <span>let's go</span>
          <FaArrowRight className="mt-1" />
        </Link>

        <div className="flex flex-row gap-3 justify-around">
          {/* first */}
          <div className="w-1/3 flex flex-col gap-4 justify-start items-center">
            <figure className="flex justify-center p-2 w-[200px] h-[145px] overflow-hidden">
              <img
                src="/src/assets/bottle.png"
                className="scale-150"
                alt="job"
              />
            </figure>
            <p className="font-poppins-regular text-[14px] px-2 text-center">
              let us know you are looking
            </p>
          </div>
          {/* second */}
          <div className="w-1/3 flex flex-col justify-start gap-4  items-center">
            <figure className="flex justify-center p-2 w-[200px] h-[145px] overflow-hidden">
              <img
                src="/src/assets/telephone.png"
                className="scale-110"
                alt="job"
              />
            </figure>
            <p className="font-poppins-regular px-2 text-[14px] text-center">
              We’ll get in touch & get to know you
            </p>
          </div>
          {/* third */}
          <div className="w-1/3 flex flex-col gap-4 justify-start items-center">
            <figure className="flex justify-center p-2 w-[200px] h-[145px] overflow-hidden ">
              <img
                src="/src/assets/chairs.png"
                className="scale-110"
                alt="job"
              />
            </figure>
            <p className="font-poppins-regular px-2 text-center">
              Interview and get hired
            </p>
          </div>
        </div>
      </article>

      {/* second article */}
      <article className="lg:w-1/2 bg-[#0f1b38] *:text-slate-200 overflow-hidden">
        <h2 className="text-center font-poppins-bold my-6 text-5xl lg:w-2/3 lg:mx-auto">
          Grow with confidence
        </h2>
        <p className="font-poppins-regular text-center mb-2 px-3">
          Browse our unique opportunities or let us know you are looking. With
          absolute privacy, together we’ll find your best fit
        </p>
        <Link
          className="flex justify-center gap-4 font-poppins-bold text-2xl mt-3 py-10 items-center mb-4 showme"
          to="/find-your-job">
          <span>let's go</span>
          <FaArrowRight className="mt-1" />
        </Link>

        <div className="flex flex-row gap-3 justify-around">
          {/* first */}
          <div className="w-1/3 flex flex-col gap-4 justify-start items-center">
            <figure className="flex justify-center p-2 w-[200px] h-[145px] showme overflow-hidden">
              <img
                src="/src/assets/bottle.png"
                className="scale-150"
                alt="job"
              />
            </figure>
            <p className="font-poppins-regular text-[14px] px-2 text-center">
              let us know you are looking
            </p>
          </div>
          {/* second */}
          <div className="w-1/3 flex flex-col justify-start gap-4  items-center">
            <figure className="flex justify-center p-2 w-[200px] h-[145px] showme overflow-hidden">
              <img
                src="/src/assets/telephone.png"
                className="scale-110"
                alt="job"
              />
            </figure>
            <p className="font-poppins-regular px-2 text-[14px] text-center">
              We’ll get in touch & get to know you
            </p>
          </div>
          {/* third */}
          <div className="w-1/3 flex flex-col gap-4 justify-start items-center">
            <figure className="flex justify-center p-2 w-[200px] h-[145px] overflow-hidden ">
              <img
                src="/src/assets/chairs.png"
                className="scale-110"
                alt="job"
              />
            </figure>
            <p className="font-poppins-regular px-2 text-center">
              Interview and get hired
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
