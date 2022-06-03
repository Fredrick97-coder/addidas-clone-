import React from 'react';
import item1 from '../assets/collections/1.png';
import item2 from '../assets/collections/2.png';
import item3 from '../assets/collections/3.webp';

function Products() {
  return (
    <>
      <div className="h-[0.5px] w-full bg-black opacity-25 mt-28"></div>
      <ul className="flex flex-row my-5 pl-5">
        <li className="px-3 text-lg uppercase font-addidas font-extrabold cursor-pointer">
          New Arrivals
        </li>
        <li className="px-3 text-lg uppercase font-addidas ">
          What's Trending
        </li>
      </ul>
      <div className="h-[0.5px] w-full bg-black opacity-25 mb-28"></div>
      <div className="grid grid-cols-5 gap-2 h-full w-full mb-5 font-addidas">
        <div className="relative flex flex-col h-full w-auto mb-10 hover:border-[1px] hover:border-black">
          <img src={item3} alt="" className="h-70 object-cover " />
          <div className="block mx-2 pt-2 pb-10">
            <h2 className="">Ultraboost 22 Shoes</h2>
            <p className="text-sm font-light text-gray-500">Men's Running</p>
            <h3>best seller</h3>
          </div>
        </div>
        <div className="relative flex flex-col h-full w-auto mb-10 hover:border-[1px] hover:border-black">
          <img src={item3} alt="" className="h-70 object-cover" />
          <div className="block mx-2 pt-2 pb-10">
            <h2 className="">Ultraboost 22 Shoes</h2>
            <p className="text-sm font-light text-gray-500">Men's Running</p>
            <h3>best seller</h3>
          </div>
        </div>
        <div className="relative flex flex-col h-full w-auto mb-10 hover:border-[1px] hover:border-black">
          <img src={item3} alt="" className="h-70 object-cover" />
          <div className="block mx-2 pt-2 pb-10">
            <h2 className="">Ultraboost 22 Shoes</h2>
            <p className="text-sm font-light text-gray-500">Men's Running</p>
            <h3>best seller</h3>
          </div>
        </div>
        <div className="relative flex flex-col h-full w-auto mb-10 hover:border-[1px] hover:border-black">
          <img src={item3} alt="" className="h-70 object-cover" />
          <div className="block mx-2 pt-2 pb-10">
            <h2 className="">Ultraboost 22 Shoes</h2>
            <p className="text-sm font-light text-gray-500">Men's Running</p>
            <h3>best seller</h3>
          </div>
        </div>
        <div className="relative flex flex-col h-full w-auto mb-10 hover:border-[1px] hover:border-black">
          <img src={item3} alt="" className="h-70 object-cover" />
          <div className="block mx-2 pt-2 pb-10">
            <h2 className="">Ultraboost 22 Shoes</h2>
            <p className="text-sm font-light text-gray-500">Men's Running</p>
            <h3>best seller</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
