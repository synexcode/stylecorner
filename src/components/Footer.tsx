import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="text-[#008EAA] body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Logo Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center md:items-start">
              <img src="/logo.png" alt="StyleCorner Logo" className="w-32 mb-4" />
              <p className="text-sm text-[#E52E71] font-semibold">Your fashion, your style.</p>
            </div>

            {/* Quick Links */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#008EAA] tracking-widest text-sm mb-3">
                Categories
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li><a className="hover:text-[#E52E71] cursor-pointer">Shop</a></li>
                <li><a className="hover:text-[#E52E71] cursor-pointer">Services</a></li>
                <Link href={"/policy"}><li><p className="hover:text-[#E52E71] cursor-pointer">Policies</p></li></Link>
                <li><a className="hover:text-[#E52E71] cursor-pointer">Accessories</a></li>
              </nav>
            </div>

            {/* Support */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#008EAA] tracking-widest text-sm mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li><a className="hover:text-[#E52E71] cursor-pointer">Email: ... </a></li>
                <li><a className="hover:text-[#E52E71] cursor-pointer">Phone: ...</a></li>
                <li><a className="hover:text-[#E52E71] cursor-pointer">Karachi , Pakistan</a></li>
                 <div className="flex items-center space-x-4 ">
         <Link href="https://wa.me/c/923432545108"><FaWhatsapp className="w-5 h-5 text-green-500 "/></Link> 
          {/* <FaInstagram className="w-5 h-5 bg-clip-text bg-gradient-to-t from-yellow-400 via-pink-500 to-purple-600 "/> */}
          <span className=" text-white  bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
  <FaInstagram className="w-5 h-5" />
</span>
          <FaFacebookSquare className="w-5 h-5 text-blue-600 "/>
           </div>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#008EAA] tracking-widest text-sm mb-3">
                Subscribe
              </h2>
              <div className="flex flex-wrap items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 rounded border border-[#008EAA] text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E52E71] mb-2"
                />
                <button className="bg-[#E52E71] text-white px-4 py-2 rounded hover:bg-[#c82560] transition duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-3 text-[#008EAA]">Get updates on latest trends and offers.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F2F2]">
          <div className="container px-5 py-4 mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-[#008EAA]">© {new Date().getFullYear()} StyleCorner — All rights reserved</p>
            <p className="text-sm text-[#E52E71] mt-2 sm:mt-0">
              Made by <a href="https://www.synexcode.com" target="_blank" className="underline hover:text-[#008EAA]">SynexCode</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
