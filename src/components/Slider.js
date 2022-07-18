import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/virtual';
import './customslider.css';

export const ImageSlider = ({ children, include }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
      spaceBetween={15}
      slidesPerView={4}
      A11y={true}
      Autoplay={false}
      navigation
      scrollbar={
        include
          ? {
              draggable: true,
              hide: false,
              snapOnRelease: true,
              dragSize: 100,
              draggableSize: 100,
            }
          : false
      }
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide changed')}
    >
      {children}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};
