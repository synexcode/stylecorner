"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const images = ["/hero1.png", "/hero2.png", "/hero3.png"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative bg-white z-0 w-full h-screen overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute z-0  inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(0.75)",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-white opacity-10 z-0" />

      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          20% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        .hero-text-animation {
          animation: fadeSlideIn 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-20 h-full flex items-center px-10">
        <div className="text-left text-white max-w-md hero-text-animation">
          <h2 className="text-6xl font-bold mb-4 italic drop-shadow-md">
            Elegance, <span className="text-[#E52E71]">Redefined</span>
          </h2>
          <Link href="/shop">
          <button className="px-8 py-4 border border-white hover:bg-[#008EAA] hover:border-[#008EAA] text-[18px] hover:text-white transition duration-300">
            NEW ARRIVALS →
          </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              idx === currentIndex ? "bg-[#E52E71]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
