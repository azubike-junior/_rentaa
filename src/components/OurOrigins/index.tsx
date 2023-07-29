import React from 'react'
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import slide1 from '../../images/slider1.png'
import slide2 from '../../images/slider2.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

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
    </>
  )
}
export default OurOrigins
