import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/swiper-bundle.min.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slider1 from '../../../assets/images/slider1.jpeg';
import slider2 from '../../../assets/images/slider2.jpg';
import slider3 from '../../../assets/images/slider4.jpg';
import slider4 from '../../../assets/images/slider3.jpg';
import slider5 from '../../../assets/images/slider5.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    Aos.init({duration: 1500, easing: "linear"
});
   },[]);

    return (
        <Swiper data-aos="zoom-out" modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={1700}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><img className='rounded-2xl' src={slider1} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={slider2} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={slider3} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={slider4} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src={slider5} alt="" style={{width: "100%", height: "80vh"}} /></SwiperSlide>
      </Swiper>
    );
};

export default Banner;