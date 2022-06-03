import React from 'react';
import { Service } from '../model/Service';

function Services() {
  return (
    <div className="flex flex-row h-full w-full mb-5 mt-44 font-addidas ">
      {Service.map((service) => (
        <div
          key={service.id}
          className="relative flex flex-col bg-white h-[75vmin] w-auto px-2"
        >
          <img
            src={service.img}
            alt={service.title}
            className="h-65 object-cover "
          />
          <div className="pt-2">
            <h2 className="font-bold">{service.title}</h2>
            <p className="text-sm font-light text-gray-500 ">
              {service.description}
            </p>
            <div className="absolute bottom-0">
              <h3 className="underline uppercase font-addidasbold tracking-widest">
                {service.link}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
