"use client";
import Image from 'next/image';
import React from 'react';
import logo from "../../public/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full bg-white px-6 flex justify-between items-center border-b border-gray-200 h-20 shadow-sm">
      {/* Logo */}
      <div className="flex items-center w-28 h-16 relative">
        <Image 
          src={logo} 
          alt="Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* Center Nav */}
      <div className="hidden md:flex space-x-6 items-center text-[14px] font-medium">
        {["HOME", "SHOP", "PRODUCTS", "PAGES", "BLOGS"].map((item, idx) => (
          <React.Fragment key={idx}>
            <a href="#" className="text-gray-700 hover:text-[#008EAA] transition-colors">{item}</a>
            {idx < 4 && <IoIosArrowDown className="text-gray-400 text-xs" />}
          </React.Fragment>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-[#E52E71] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-[#E52E71] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
