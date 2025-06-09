import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { RiStarSmileFill } from "react-icons/ri";

const Services = () => {
  return (
    <section className="body-font mt-4 text-black bg-white py-12">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#008EAA] font-[Pacifico]">
            Our Services
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-[#E52E71] rounded-full" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Service Box 1 */}
          <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
            <div className="w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full bg-[#E52E71]/10 text-[#E52E71] hover:scale-110 duration-300 mb-5 shadow-sm">
              <MdOutlineLocalShipping className="hover:animate-bounce" />
            </div>
            <div className="flex-grow">
              <h3 className="text-[#008EAA] hover:text-[#E52E71] text-xl font-semibold duration-300 mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                Get your favorite beauty products delivered swiftly and safely.
              </p>
            </div>
          </div>

          {/* Service Box 2 */}
          <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
            <div className="w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full bg-[#E52E71]/10 text-[#E52E71] hover:scale-110 duration-300 mb-5 shadow-sm">
              <TbTruckReturn className="hover:animate-bounce" />
            </div>
            <div className="flex-grow">
              <h3 className="text-[#008EAA] hover:text-[#E52E71] text-xl font-semibold duration-300 mb-2">
                Easy Returns
              </h3>
              <p className="text-gray-600">
                Shop with confidence knowing our return policy is hassle-free.
              </p>
            </div>
          </div>

          {/* Service Box 3 */}
          <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
            <div className="w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full bg-[#E52E71]/10 text-[#E52E71] hover:scale-110 duration-300 mb-5 shadow-sm">
              <RiStarSmileFill className="hover:animate-bounce" />
            </div>
            <div className="flex-grow">
              <h3 className="text-[#008EAA] hover:text-[#E52E71] text-xl font-semibold duration-300 mb-2">
                Authentic Products
              </h3>
              <p className="text-gray-600">
                Discover the finest quality with our 100% authentic items.
              </p>
            </div>
          </div>

          {/* Service Box 4 */}
          <div className="p-4 md:w-1/4 w-full flex flex-col text-center items-center">
            <div className="w-20 h-20 text-5xl inline-flex items-center justify-center rounded-full bg-[#E52E71]/10 text-[#E52E71] hover:scale-110 duration-300 mb-5 shadow-sm">
              <TbTruckReturn className="hover:animate-bounce" />
            </div>
            <div className="flex-grow">
              <h3 className="text-[#008EAA] hover:text-[#E52E71] text-xl font-semibold duration-300 mb-2">
                Easy Returns
              </h3>
              <p className="text-gray-600">
                Shop with confidence knowing our return policy is hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
