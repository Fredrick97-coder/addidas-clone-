import React, { useState } from 'react';
import { Product } from '../model/Product';
import { ImageSlider } from './Slider';
import { SwiperSlide } from 'swiper/react';
import HeaderDivider from './HeaderDivider';
import { Fade } from 'react-reveal';

function Products() {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(null);

  const handleHover = (i) => {
    if (index === i) {
      return setIndex(null);
    }
    setIndex(i);
    setHover(true);
  };

  const handleLeave = (i) => {
    if (index === i) {
      return setIndex(null);
    }
    setIndex(i);
    setHover(true);
  };
  return (
    <>
      <HeaderDivider />
      <ImageSlider include={false}>
        <div className="grid grid-cols-5 h-full w-full mb-5 font-addidas">
          {Product.map((product, i) => (
            <SwiperSlide>
              <Fade left>
                <div
                  key={product.id}
                  className="relative flex flex-col mb-20 mx-1 cursor-pointer before:absolute before:top-0 before:left-0 before:h-full before:w-full hover:before:border-[0.8px] before:border-black hover:before:transition-all"
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={() => handleLeave(i)}
                >
                  <img
                    src={product.img}
                    alt=""
                    className="h-[22em] object-cover "
                  />
                  <div
                    className={
                      hover && index === i
                        ? 'absolute bottom-[7.1em] bg-white ml-1 p-1 transition-all duration-200 ease-in-out'
                        : 'absolute bottom-[6.7em] bg-white ml-1 p-1 transition-all duration-500 ease-in-out'
                    }
                  >
                    ${product.price}
                  </div>
                  <div className="pt-2 pb-5 px-2">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-sm font-light text-gray-500">
                      {product.description}
                    </p>
                    <h4 className="text-lg font-semibold">{product.rating}</h4>
                  </div>
                </div>
              </Fade>
            </SwiperSlide>
          ))}
        </div>
      </ImageSlider>
    </>
  );
}

export default Products;
