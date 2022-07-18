import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="h-full w-full bg-yellow-300 flex flex-row justify-center items-center py-14">
      <h3 className="text-4xl font-extrabold">
        JOIN OUR ADICLUB & GET 15% OFF
      </h3>
      <div className="relative bg-black px-7 py-3 text-white mx-5 text-sm font-black flex items-center justify-center before:absolute before:border-[1px] before:border-black before:h-full before:w-full before:left-1 before:top-1 hover:text-zinc-500 cursor-pointer">
        <Link exact to="/register" style={{ zIndex: 10000 }}>
          SIGN UP FOR FREE
        </Link>
        <ArrowRightOutlined className="text-xl font-black pl-5" />
      </div>
    </div>
  );
}

export default Banner;
