import React from 'react';
import { Service } from '../model/Service';

function Services() {
  return (
    <div className="flex flex-row h-full w-full mb-5 mt-44">
      {Service.map((service) => (
        <div
          key={service.id}
          className="relative flex flex-col w-auto px-2 pb-3"
        >
          <img
            src={service.img}
            alt={service.title}
            className="h-65 object-cover "
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
      ))}
    </div>
  );
}

export default Services;
