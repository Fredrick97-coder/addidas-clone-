import React from 'react';
import img from '../assets/hero1.jpeg';
import left from '../assets/left.jpeg';

function Hero() {
  return (
    <div className="relative grid grid-cols-2 h-[85vh] w-full font-addidas">
      <div className="h-full">
        <img src={left} alt="" className="h-[100%] w-full object-cover" />
        <div className="absolute bottom-60 px-5">
          <h3 className="text-white font-bold text-3xl uppercase">
            We Gotcah covered
          </h3>
          <h3 className="text-white font-black font-poppins text-4xl uppercase">
            With High Quality Stuff
          </h3>
          <button className="bg-yellow-500 text-white px-5 py-2 mt-5 text-xl font-extrabold shadow-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="h-full">
        <img src={img} alt="" className="h-[100%] w-full object-cover" />
      </div>
    </div>
  );
}

export default Hero;
