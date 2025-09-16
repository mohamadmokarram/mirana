import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PARTNERS from "../data/partnersData.js";

import "swiper/css";
import "swiper/css/autoplay";

export default function Slider() {
  return (
    <Swiper
      className="!px-4 mb-10 lg:w-2/3"
      simulateTouch={true}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 5,
        },
      }}
      slidesPerView={2}
      spaceBetween={20}>
      {PARTNERS.map(item => (
        <SwiperSlide key={item.id}>
          <div className="flex justify-center items-center">
            <img src={item.img} alt="business" className="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
