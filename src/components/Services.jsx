import React from 'react';
import { Service } from '../model/Service';
import { ImageSlider } from './Slider';
import { SwiperSlide } from 'swiper/react';
import { Fade } from 'react-reveal';
// import './service.css';

function Services() {
  return (
    <div className="mt-20">
      <ImageSlider include={true}>
        {Service.map((service) => (
          <SwiperSlide>
            <Fade right>
              <div
                key={service.id}
                className="relative flex flex-col h-[500px] px-2 pb-3 bg-white mb-12"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-65 object-cover"
                />
                <div className="pt-2">
                  <h2 className="text-xl font-addidasbold">{service.title}</h2>
                  <p className="text-sm font-light text-gray-500 pb-3">
                    {service.description}
                  </p>
                  <div className="absolute bottom-0">
                    <h5 className="cursor-pointer underline uppercase font-addidasbold tracking-wider">
                      {service.link}
                    </h5>
                  </div>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
        ))}
      </ImageSlider>
    </div>
  );
}

export default Services;
