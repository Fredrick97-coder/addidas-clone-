import React from 'react';
import { useState } from 'react';
import { MenuLinks } from '../model/MenuItems';

function DropLink() {
  const [isOpen, updateIsOpen] = useState(false);

  const handleClick = () => updateIsOpen(!isOpen);
  return (
    <div className="absolute w-full bg-white top-15 z-20 left-0">
      <div className="h-[0.5px] w-full bg-black opacity-25 mt-10"></div>
      <div className="h-full w-full grid grid-cols-5 grid-rows-2 leading-[3em] font-addidas">
        {MenuLinks.map((item) => (
          <div className="m-10">
            <h2 className="text-lg font-bold uppercase">{item.title}</h2>
            <div>
              {item.links.map((link) => (
                <li className="w-20  font-addidas font-light pl-1 text-sm list-none hover:bg-yellow-500 leading-5 ">
                  {link}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropLink;
