import React from 'react';

function Feature() {
  return (
    <div className="bg-white py-16 h-full w-full font-addidas">
      <h2 className="pb-5 text-[2.8em] text-center font-addidasbold italic font-black tracking-wide leading-[0.8]">
        POPULAR RIGHT NOW
      </h2>
      <div className="flex justify-center items-center pb-6">
        <div className="bg-white border-[0.3px] border-gray-400 uppercase p-3 mx-2 my-5 hover:boder-[1.5px] hover:border-black cursor-pointer">
          <h4>Utralboost</h4>
        </div>
        <div className="bg-white border-[0.3px] border-gray-400 uppercase p-3 mx-2 my-5 hover:boder-[1.5px] hover:border-black cursor-pointer">
          <h4>Nmd</h4>
        </div>
        <div className="bg-white border-[0.3px] border-gray-400 uppercase p-3 mx-2 my-5 hover:boder-[1.5px] hover:border-black cursor-pointer">
          <h4>Samba</h4>
        </div>
        <div className="bg-white border-[0.3px] border-gray-400 uppercase p-3 mx-2 my-5 hover:boder-[1.5px] hover:border-black cursor-pointer">
          <h4>Stan Smith</h4>
        </div>
        <div className="bg-white border-[0.3px] border-gray-400 uppercase p-3 mx-2 my-5 hover:boder-[1.5px] hover:border-black cursor-pointer">
          <h4>Cleats</h4>
        </div>
      </div>
    </div>
  );
}

export default Feature;
