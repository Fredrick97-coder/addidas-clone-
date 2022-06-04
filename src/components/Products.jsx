import React from 'react';
import { Product } from '../model/Product';

function Products() {
  return (
    <>
      <div className="h-[0.5px] w-full bg-black opacity-25 mt-28"></div>
      <ul className="flex flex-row my-4 pl-5">
        <li className="px-3 text-lg uppercase font-addidas font-extrabold cursor-pointer">
          New Arrivals
        </li>
        <li className="px-3 text-lg uppercase font-addidas ">
          What's Trending
        </li>
      </ul>
      <div className="h-[0.5px] w-full bg-black opacity-25 mb-28"></div>
      <div className="grid grid-cols-5 h-full w-full mb-5 font-addidas">
        {Product.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col mb-10 mx-1 cursor-pointer before:absolute before:top-0 before:left-0 before:h-full before:w-full hover:before:border-[0.8px] before:border-black hover:before:transition-all"
          >
            <img src={product.img} alt="" className="h-70 object-cover " />
            <div className="pt-2 pb-5 px-2">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-sm font-light text-gray-500">
                {product.description}
              </p>
              <h4 className="text-lg font-semibold">{product.rating}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
