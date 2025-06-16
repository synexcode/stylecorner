"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../../public/logo.png";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
// ✅ Just use 'products' directly
import products from "../../Data/data";
import Responsivenav from "./Responsivenav";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

 const filteredProducts = products.filter((product: any) =>
  typeof product?.title === 'string' &&
  product.title.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <div className="w-full bg-white border-b overflow-hidden border-gray-200 shadow-sm relative">
      <div className="px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex  items-center w-28 h-16 relative">
          <Image
            src={logo}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-24 items-center text-[14px] font-medium">
          {/* {["HOME", "SHOP"].map((item, idx) => (
            <a
              key={idx}
              href="/"
              className="text-gray-700 hover:text-[#008EAA] transition-colors"
            >
              {item}
            </a>
          ))} */}
          <ul className="hidden md:flex space-x-24 items-center text-[14px] font-medium">
           <Link href={"/"}><li className="text-gray-700 hover:text-[#008EAA] transition-colors">Home</li></Link> 
           <Link href={"shop"}> <li className="text-gray-700 hover:text-[#008EAA] transition-colors">Shop</li></Link>
          </ul>
        </div>

        {/* Search */}
        <div className="relative">
          <div className="flex items-center gap-[10px] lg:mr-0 mr-5 px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-transparent outline-none text-black text-[14px] placeholder:text-gray-400 w-full"
            />
            <IoSearch className="text-gray-600 w-[20px] h-[20px]" />
          </div>

          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-10">
              <ul>
                {filteredProducts.map((product:any) => (
                  <li
                    key={product._id}
                    className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                  >
                    <Link href={`/shop/${product._id}`}>{product.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
         <div className="lg:block hidden">
           <div className="flex items-center space-x-4 ">
            <Link href={"/wishlist"}>
            <FaRegHeart className="w-5 h-5 text-gray-700 hover:text-[#E52E71]" />
          </Link>
          <Link href={"/cart"}>
            <IoBagOutline className="w-5 h-5 text-gray-700 hover:text-[#E52E71]" />
          </Link>
           </div>
         </div>

          
        </div>

        <div className="md:hidden">
          <Responsivenav/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
