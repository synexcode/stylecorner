"use client";
import { Button } from "@/components/ui/button";
import { TbShoppingBagHeart } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa6";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Detailpage = () => {
  const dummyProduct = {
    id: 1,
    title: "Elegant Gold Diamond Ring",
    image: "/ring.png",
    category: "Jewelry",
    price: 2499,
    description:
      "A beautifully handcrafted diamond ring made with 18k gold, perfect for engagements or special occasions.",
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full">
          <Image
            src={dummyProduct.image}
            alt={dummyProduct.title}
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm text-[#E52E71] tracking-widest uppercase font-semibold">
            {dummyProduct.category}
          </h2>

          <div className="rating rating-sm my-3">
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
            {dummyProduct.title}
          </h1>

          <p className="leading-relaxed text-[#E52E71] mb-5">
            {dummyProduct.description}
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#008EAA] font-medium">Quantity:</span>
            <Button
              onClick={() =>
                setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
              }
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

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#008EAA]">
              Rs. {dummyProduct.price * quantity}
            </span>

            <Link href="/payment">
              <Button className="flex items-center gap-2 bg-[#E52E71] text-white hover:bg-[#c91c5a] px-4 py-2 rounded">
                <TbShoppingBagHeart className="text-xl" />
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
