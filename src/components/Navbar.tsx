"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
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
        {["HOME", "SHOP", "PRODUCTS"].map((item, idx) => (
          <React.Fragment key={idx}>
            <a href="#" className="text-gray-700 hover:text-[#008EAA] transition-colors">{item}</a>
            {idx < 4 && <IoIosArrowDown className="text-gray-400 text-xs" />}
          </React.Fragment>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Link href={"/wishlist"}>
       <button className="text-gray-700 hover:text-[#E52E71] transition-colors">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
</button>
</Link>
        <Link href={"/cart"}>
        <button className="text-gray-700 hover:text-[#E52E71] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
