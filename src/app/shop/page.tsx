"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import AddToCartButton from "../../components/Addtocartbutton"; 
import AddToWishlistButton from "../../components/Addtowishlishbutton";

import products from "../../../Data/data";
const Foryoucomp = () => {

  return (
<div className=" lg:mt-[60px] mt-[20px] mb-[30px]  lg:mb-[100px] px-4 overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#008EAA] font-[Pacifico]">
      Our Products
    </h2>
    <div className="flex justify-center mt-4">
      <div className="w-16 h-1 bg-[#E52E71] rounded-full" />
    </div>
  </div>

  {/* Cards Grid */}
  <div className="text-gray-600">
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
      {products.map((item) => (
       
        <div
          key={item.id}
          className="w-full sm:w-[55%] lg:w-[23%] bg-white"
        >
         
            <div className="block relative h-48 rounded overflow-hidden hover:scale-110 hover:duration-500">
               <Link href={`/shop/${item.slug}`} key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={230}
                className="object-cover rounded"
              />
              </Link>
            </div>
         
          <div className="flex justify-between">
            <div className="mt-4">
            <h1 className="text-[16px] font-semibold text-myverydarkpink">
              {item.title}
            </h1>
            <h2 className="text-gray-900 title-font text-sm font-medium line-clamp-1">
              {item.description}
            </h2>
            <p className="mt-1">Rs. {item.price}</p>
          </div>
          <div className="text-center mt-10 mr-20">
          <AddToWishlistButton
  product={{
    id: item.id,
    name: item.title,
    price: item.price,
    image: item.img
  }}
/>

          </div>
          </div>
          <div className="flex gap-7 mt-4 px-6">
              <AddToCartButton
                 product={{
    id: item.id,
    name: item.title,
    price: item.price,
    image: item.img,
    quantity: 1
              }}
              />
            <Button className="group flex items-center gap-1 cursor-pointer text-styleWhite bg-stylePink hover:bg-styleBlue text-[14px] border-styleBlue duration-300">
              <IoIosCheckmarkCircle className="text-xl group-hover:animate-bounce text-styleWhite" />
              <Link href="/checkout">Buy now</Link>
            </Button>
          </div>
        </div>
        
      ))}
    </div>
  </div>
</div>

  );
};

export default Foryoucomp;
