import React from 'react';
import { Service } from '../model/Service';
// import { Slide } from 'react-reveal';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Services() {
  return (
    <div className="flex flex-row h-full w-full mb-5 mt-44 ">
      {Service.map(({ id, img, title, description, link }) => (
        <div key={id} className="relative flex flex-col w-[500px] px-2 pb-3 ">
          <img src={img} alt={title} className="h-65 object-cover " />
          <div className="pt-2">
            <h2 className="text-xl font-addidasbold">{title}</h2>
            <p className="text-sm font-light text-gray-500 pb-3">
              {description}
            </p>
            <div className="absolute bottom-0">
              <h5 className="cursor-pointer underline uppercase font-addidasbold tracking-wider">
                {link}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
