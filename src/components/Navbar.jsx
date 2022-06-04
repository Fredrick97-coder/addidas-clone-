import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../assets/adidas-logo-png-2362.png';
import { NavLink } from '../model/NavLink';
// import DropdownMenu from './Dropdown';

function Navbar() {
  const [track, updateTrack] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (i) => {
    if (track === i) {
      updateTrack(null);
      if (window.innerWidth < 960) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    updateTrack(i);
  };

  const onMouseEnter = (i) => {
    if (track === i) {
      updateTrack(null);
      if (window.innerWidth < 960) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    updateTrack(i);
  };

  const onMouseLeave = (i) => {
    if (track === i) {
      updateTrack(null);
      if (window.innerWidth < 960) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    }
    updateTrack(i);
  };

  return (
    <div className="h-full w-full font-addidas ">
      <nav className="flex flex-row justify-between items-end bg-white px-10 py-6 shadow-sm ">
        <img src={logo} alt="addidas" className="h-[35px]" />
        <div className="flex flex-row items-center">
          {NavLink.map(({ id, link, Dropdown, drop }, i) => (
            <li
              onClick={() => onClick(i)}
              onMouseEnter={() => onMouseEnter(i)}
              onMouseLeave={() => onMouseLeave(i)}
              className="px-2 tracking-widest text-sm cursor-pointer list-none hover:bg-yellow-500"
            >
              {link}
              {track === i && isOpen ? Dropdown : null}
            </li>
          ))}
        </div>
        <div className="relative flex flex-row items-center">
          <div className="relative px-3">
            <input
              type="text"
              placeholder="Search"
              className="placeholder-current bg-gray-300 p-[5px] pr-8 border-0 border-black focus:outline-none focus:border-[0.5px] text-sm"
            />
            <SearchOutlined className=" text-[20px] absolute px-3 top-1 right-[3px]" />
          </div>
          <div className="relative">
            <UserOutlined className="px-3" />
            <span className="absolute left-5 top-[-10px] bg-yellow-500 h-6 w-6 rounded-full self-center flex items-center justify-center shadow-lg">
              1
            </span>
            <HeartOutlined className="px-3" />
            <ShoppingCartOutlined className="px-3" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
