import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Swippers.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Swippers = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src="https://img.autoparts24.eu/images/original/A/0022/S21043-0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.autoparts24.eu/images/original/G/0001/0046535PI0100_0.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.autoparts24.eu/images/original/A/0022/S21043-0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.autoparts24.eu/images/original/G/0001/0046535PI0100_0.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swippers;
