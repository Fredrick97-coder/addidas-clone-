import React from 'react';
import item1 from '../assets/collections/1.png';
import item2 from '../assets/collections/2.png';

function Collections() {
  return (
    <div className="flex flex-row h-full w-full mb-5 font-addidas font-black">
      <div className="relative flex flex-col justify-center items-center bg-gray-100 h-[250px] w-full ml-3 mr-3">
        <img src={item1} alt="" className="h-40" />
        <h2 className="underline uppercase font-black cursor-pointer hover:bg-black hover:text-white hover:no-underline hover:px-1">
          Shoes
        </h2>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gray-100 h-[250px] w-full ml-3 mr-3">
        <img src={item2} alt="" className="h-40" />
        <h2 className="underline uppercase font-black cursor-pointer hover:bg-black hover:text-white hover:no-underline hover:px-1">
          Clothing
        </h2>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gray-100 h-[250px] w-full ml-3 mr-3">
        <img src={item1} alt="" className="h-40" />
        <h2 className="underline uppercase font-black cursor-pointer hover:bg-black hover:text-white hover:no-underline hover:px-1">
          Best Sellers
        </h2>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-gray-100 h-[250px] w-full ml-3 mr-3">
        <img src={item2} alt="" className="h-40" />
        <h2 className="underline uppercase font-black cursor-pointer hover:bg-black hover:text-white hover:no-underline hover:px-1">
          New Arrival
        </h2>
      </div>
    </div>
  );
}

export default Collections;
