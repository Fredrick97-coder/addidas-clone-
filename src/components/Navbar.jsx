import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import logo from '../assets/adidas-logo-png-2362.png';

function Navbar() {
  return (
    <div className="h-full w-full">
      <nav className="flex flex-row items-center justify-between bg-white px-10 py-6 shadow-sm">
        <div className="">
          <img src={logo} alt="addidas" className="h-10" />
        </div>
        <ul className="flex flex-row items-center">
          <li className="px-2 tracking-widest text-sm font-bold cursor-pointer">
            MEN
          </li>
          <li className="px-2 tracking-widest text-sm font-bold cursor-pointer">
            WOMEN
          </li>
          <li className="px-2 tracking-widest text-sm font-bold cursor-pointer">
            KIDS
          </li>
          <li className="px-2 tracking-widest text-sm font-normal cursor-pointer">
            SALE
          </li>
          <li className="px-2 tracking-widest text-sm font-normal cursor-pointer">
            3 STRIPE LIFE
          </li>
        </ul>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="placeholder-current bg-gray-300 p-[5px] border-0 border-black focus:outline-none focus:border-[0.5px] text-sm"
          />
          <SearchOutlined className="px-2" />
          <UserOutlined className="px-2" />
          <HeartOutlined className="px-2" />
          <ShoppingCartOutlined className="px-2" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
