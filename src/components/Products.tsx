"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Your brand theme colors
const accentBlue = "#008EAA";
const accentPink = "#E52E71";

const products = [
  {
    id: 1,
    image: "/product1.png",
    label: "NEW IN",
    title: "Oval Yellow Diamond Double Halo Engagement Ring",
    price: "$2,499.00",
    note: "3 sizes are available",
  },
  {
    id: 2,
    image: "/product2.png",
    label: "30% OFF",
    title: "Small Earrings In Gold with Diamond",
    price: "$3,370.00",
    oldPrice: "$3,899.00",
    countdown: "1d : 3h : 40m : 16s",
  },
  {
    id: 3,
    image: "/product3.png",
    label: "30% OFF",
    title: "Sixteen Stone Narrow Earrings",
    price: "$2,499.00",
    oldPrice: "$2,899.00",
    tags: ["30% OFF", "Selling fast"],
  },
  {
    id: 4,
    image: "/product4.png",
    title: "Sparkling Moon & Star Stud Earrings",
    price: "$2,499.00",
    notify: true,
  },
  // Add more if needed
];

const ProductCarousel = () => {
  return (
    <div className="bg-white px-4 py-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 p-4 rounded shadow-sm relative hover:shadow-md transition-shadow duration-300">
              {product.label && (
                <span
                  className="absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded"
                  style={{ backgroundColor: accentPink }}
                >
                  {product.label}
                </span>
              )}

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-contain"
              />

              {product.note && (
                <div className="text-center text-xs text-gray-500 mt-2">
                  {product.note}
                </div>
              )}

              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-800">
                  {product.title}
                </h4>
                <div className="text-lg font-bold text-black">
                  {product.price}
                </div>
                {product.oldPrice && (
                  <div className="text-sm line-through text-gray-400">
                    {product.oldPrice}
                  </div>
                )}
                {product.countdown && (
                  <div className="text-sm border border-gray-300 mt-2 px-3 py-1 text-center text-gray-700">
                    {product.countdown}
                  </div>
                )}
                {product.tags && (
                  <div className="flex flex-wrap gap-1 mt-2 text-xs font-semibold text-white">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded"
                        style={{ backgroundColor: accentBlue }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {product.notify && (
                  <button
                    className="mt-4 w-full py-2 text-sm font-semibold text-white rounded"
                    style={{ backgroundColor: accentBlue }}
                  >
                    Notify Me When Available
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
