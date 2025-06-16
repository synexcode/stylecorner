"use client";
import { Button } from "@/components/ui/button";
import { TbShoppingBagHeart } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa6";
import React, { useState } from "react";
import Image from "next/image";
import products from "../../../../Data/data";
import Link from "next/link";
import AddToCartButton from "@/components/Addtocartbutton";

interface Param {
  params: {
    slug: string;
  };
}

const Detailpage = ({ params }: Param) => {
  const product = products.find((item) => item.slug === params.slug);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Product not found!
      </div>
    );
  }

  return (
    <div className="container lg:my-[80px] my-10 px-4 mx-auto">
      <div className="flex flex-col lg:flex-row flex-wrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <Image
            src={product.img}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg object-contain max-h-[400px]"
          />
        </div>

        {/* Detail Section */}
        <div className="w-full lg:w-1/2 lg:pl-10">

          {/* Rating */}
          <div className="rating rating-sm my-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-[#E52E71]"
                  defaultChecked={i === 1}
                />
              ))}
          </div>

          <h1 className="text-3xl font-semibold text-[#008EAA] mb-2">
            {product.title}
          </h1>

          <p className="leading-relaxed text-[#E52E71] mb-5">
            {product.description}
          </p>

          {/* Quantity Section */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#008EAA] font-medium">Quantity:</span>
            <Button
              onClick={() => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}
              className="bg-[#E52E71] text-white px-2 hover:bg-[#c91c5a]"
            >
              <FaMinus />
            </Button>
            <span className="text-[#008EAA] font-semibold">{quantity}</span>
            <Button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="bg-[#E52E71] text-white px-2 hover:bg-[#c91c5a]"
            >
              <FaPlus />
            </Button>
          </div>

          {/* Price and Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center lg:justify-normal justify-center gap-4">
            <span className="text-2xl font-bold text-[#008EAA]">
              Rs. {product.price * quantity}
            </span>

            <div className="flex flex-col sm:flex-row gap-3">
              <AddToCartButton
                product={{
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.img,
                  quantity,
                }}
              />
              <Link href="/payment">
                <Button className="flex items-center gap-2 bg-[#E52E71] text-white hover:bg-[#c91c5a] px-4 py-2 rounded w-full sm:w-auto justify-center">
                  <TbShoppingBagHeart className="text-xl" />
                   Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
