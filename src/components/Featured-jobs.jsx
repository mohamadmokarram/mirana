import JOBLIST from "../data/jobs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaArrowRight as RightArrowIcon,
  FaArrowLeft as LeftArrowIcon,
} from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router";
import { useRef } from "react";

export default function FeaturedJobs() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="p-6 bg-slate-100">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-poppins-regular">Featured Jobs</h2>
          <div className="hidden lg:flex gap-2">
            <button
              ref={prevRef}
              className="text-xl bg-slate-200 p-3 cursor-pointer">
              <LeftArrowIcon />
            </button>
            <button
              ref={nextRef}
              className="text-xl bg-slate-200 p-3 cursor-pointer">
              <RightArrowIcon />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1.3}
          spaceBetween={16}
          loop={true}
          onBeforeInit={Swiper => {
            Swiper.params.navigation.prevEl = prevRef.current;
            Swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          }}>
          {JOBLIST.map(job => (
            <SwiperSlide>
              <div
                key={job.id}
                className="h-[350px] bg-white p-4 flex flex-col">
                <h2 className="font-poppins-bold text-xl">{job.position}</h2>
                <p className="font-poppins-regular text-[14px] capitalize py-2">
                  {job.city}
                </p>
                <p className="w-fit text-[14px] bg-slate-100 capitalize py-1 px-2 rounded">
                  {job.category}
                </p>
                <Link
                  to={`/jobs/${job.id}`}
                  className="w-fit mt-auto inline-flex items-center gap-2 py-2 px-4 bg-gray-200">
                  <span className="font-poppins-bold text-[16px] capitalize">
                    Apply Now
                  </span>
                  <RightArrowIcon className="text-slate-600" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
