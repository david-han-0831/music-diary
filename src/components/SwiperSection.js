// components/SwiperSection.js
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cover1 from '../assets/img/cover1.png';
import cover2 from '../assets/img/cover2.jpg';
import cover3 from '../assets/img/cover3.jpeg';
import cover4 from '../assets/img/cover4.jpg';
import cover5 from '../assets/img/cover5.jpg';
import cover6 from '../assets/img/cover6.jpg';
import profile from '../assets/img/profile.jpg';

const SwiperSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <section>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        className="mySwiper"
      >
        {[cover1, cover2, cover3, cover4, cover5, cover6].map((cover, index) => (
          <SwiperSlide key={index}>
            <div className="img-wrapper">
              <img src={cover} alt="앨범커버" />
            </div>
            <div className="profile">
              <div className="profileImg">
                <img src={profile} alt="프로필사진" />
                <div className="profileInfo">
                  <span>Taehee Kim</span>
                  <span>July 08, Monday</span>
                </div>
              </div>
              <button className="follow">+ Follow</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperSection;