import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../images/slide1.svg";
import slide2 from "../../images/slide2.svg";
import slide3 from "../../images/slide3.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

const OurOrigins: React.FC = () => {
  return (
    <>
      <div className="flex snap-start flex-col items-center gap-6 px-8 mt-20">
        <h2 className="font-dosis text-2xl lg:text-5xl font-bold">
          Our Origins
        </h2>
        <p className="font-dm-sans text-xs lg:text-xl font-normal text-center max-w-6xl leading-5">
          We started in September 2021 with one goal in mind; to disrupt the p2p
          gadget lending space in Nigeria. Our work since then has been a
          testament to that fact.
        </p>
        <p className="font-dm-sans text-xs lg:text-xl font-normal text-center max-w-6xl leading-5">
          Having identified a problem of e-waste management in Nigeria as well
          as rising costs of gadgets, we decided to solve that problem by
          creating a platform with our users at the centre of it. Our sole focus
          is in how best we can serve this ripe market in Nigeria and make a
          world of difference in the process.
        </p>
      </div>

      <div>
        <div className="flex md:hidden">
          <div>
            <img src={slide1} alt="" />
          </div>
          <div>
            <img src={slide2} alt="" />
          </div>
        </div>

        <div className="overflow-hidden hidden md:block">
          <div className="w-full">
            <img src={slide3} alt="" className="w-full" />
          </div>
        </div>
        {/* <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
          <SwiperSlide>
            <div className="bg-red-600">
              <img src={slide1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-600">
              <img src={slide2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
};
export default OurOrigins;
