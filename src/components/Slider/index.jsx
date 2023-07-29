import { Swiper, SwiperSlide } from 'swiper/react'
import slide1 from '../../images/slider1.png'
import slide2 from '../../images/slider2.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
// import '../../styles.css'


import React from 'react';

const Slider = () => {
  return (
    <div className="w-[350px] md:w-[700px] mx-auto mt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[400px] h-[400px]"
        >
          <SwiperSlide>
            <img src={slide1} alt="" className="w-[500px] " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
  );
}

export default Slider;
