"use client";
import React from 'react';

const Banner = () => {
  return (
    <>
      <style jsx>{`
        @keyframes slideUpDown {
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

        .banner-animation {
          animation: slideUpDown 5s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-[#008EAA] text-white text-center py-2 text-sm font-medium overflow-hidden">
        <div className="banner-animation">
          FREE STANDARD DELIVERY FOR ALL ORDERS OVER $200
        </div>
      </div>
    </>
  );
};

export default Banner;
