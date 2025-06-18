"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import logo from "../../public/logo1.png";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import products from "../../Data/data";
import Responsivenav from "./Responsivenav";

const Navbar = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

 useEffect(() => {
  const updateFromStorage = () => {
    const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setCart(updatedCart);
    setWishlist(updatedWishlist);
  };

  if (typeof window !== "undefined") {
    updateFromStorage(); // initial load
    window.addEventListener("storage", updateFromStorage);
    window.addEventListener("cartUpdated", updateFromStorage);
    window.addEventListener("wishlistUpdated", updateFromStorage); // optional if you use this
  }

  return () => {
    window.removeEventListener("storage", updateFromStorage);
    window.removeEventListener("cartUpdated", updateFromStorage);
    window.removeEventListener("wishlistUpdated", updateFromStorage); // optional
  };
}, []);




  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
console.log("Cart items:", cart.length);

  const filteredProducts = products.filter((product: any) =>
    typeof product?.title === "string" &&
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm relative z-[50]">
      <div className="px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center w-28 h-16 relative">
          <Image src={logo} alt="Logo" layout="fill" objectFit="contain" priority />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-24 items-center text-[14px] font-medium">
          <ul className="hidden md:flex space-x-24 items-center text-[17px] font-medium">
            <Link href="/"><li className="text-[#E52E71] hover:text-[#008EAA] transition-colors">Home</li></Link>
            <Link href="/shop"><li className="text-[#E52E71] hover:text-[#008EAA] transition-colors">Shop</li></Link>
          </ul>
        </div>

        {/* Search */}
        <div className="relative z-50">
          <div className="flex items-center gap-[10px] lg:mr-0 mr-5 px-[15px] py-[5px] border border-bordercoloryello rounded-2xl bg-white">
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
            <div className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-50">
              <ul>
                {filteredProducts.map((product: any) => (
                  <li
                    key={product._id}
                    className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                  >
                    <Link href={`/shop/${product.slug}`}>{product.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="lg:block hidden">
            <div className="flex items-center space-x-4 relative">
              <Link href="/wishlist" className="relative">
                <FaRegHeart className="w-5 h-5 text-blue-600 hover:text-[#E52E71]" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative">
  <BsCart4 className="w-5 h-5 text-blue-600 hover:text-[#E52E71]" />
  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
    </span>
  )}
</Link>


              <Link href="https://wa.me/c/923432545108">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
              </Link>

              <span className="text-white bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
                <FaInstagram className="w-5 h-5" />
              </span>

              <FaFacebookSquare className="w-5 h-5 text-blue-600" />
              <SiTiktok className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Responsivenav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
