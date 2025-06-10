"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    emailAddress: "",
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: ""
  });

  const [totalAmount, setTotalAmount] = useState(0);

  interface CartItem {
    price?: number;
    quantity?: number;
    [key: string]: any;
  }

  useEffect(() => {
    const storedProducts: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = storedProducts.reduce((sum: number, item: CartItem) => {
      return sum + (item.price || 0) * (item.quantity || 1);
    }, 0);

    setTotalAmount(total);
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const { fullName, address, city, zipCode, phoneNumber, emailAddress, cardNumber, cardHolderName, expiryDate, cvv } = formData;

    if (!fullName || !address || !city || !zipCode || !phoneNumber || !emailAddress) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
      toast.error("Please fill in all debit card details.");
      return;
    }

    toast.success("Your order has been placed successfully!");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="flex flex-col items-center px-6 pb-20 bg-white lg:flex-row lg:px-20 mt-12">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="p-8 max-w-2xl mx-auto rounded-2xl shadow-lg border border-gray-200 bg-white animate-on-scroll">
        <h1 className="text-3xl font-bold text-center text-[#008EAA] mb-8">Checkout</h1>

        {/* User Details Form */}
        <div className="mb-8 animate-on-scroll">
          <h2 className="text-xl font-semibold text-[#E52E71] text-center italic mb-4">User Details</h2>
          <form className="space-y-4">
            {([
              { name: 'fullName', type: 'text', placeholder: 'Full Name' },
              { name: 'address', type: 'text', placeholder: 'Address' },
              { name: 'city', type: 'text', placeholder: 'City' },
              { name: 'zipCode', type: 'text', placeholder: 'Zip Code' },
              { name: 'phoneNumber', type: 'text', placeholder: 'Phone Number' },
              { name: 'emailAddress', type: 'email', placeholder: 'Email Address' }
            ] as const).map(({ name, type, placeholder }) => (
              <input
                key={name}
                name={name}
                type={type}
                value={formData[name as keyof typeof formData]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-[#E52E71]"
              />
            ))}
          </form>
        </div>

        {/* Debit Card Section */}
        <div className="mb-8 animate-on-scroll">
          <h3 className="text-lg font-semibold text-[#008EAA] italic text-center mb-4">Debit Card Details</h3>
          <form className="space-y-4">
            {[ 
              { name: 'cardNumber', placeholder: 'Card Number' },
              { name: 'cardHolderName', placeholder: 'Card Holder Name' }
            ].map(({ name, placeholder }) => (
              <input
                key={name}
                name={name}
                type="text"
                value={formData[name as keyof typeof formData]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-[#E52E71]"
              />
            ))}
            <div className="flex space-x-4">
              <input
                name="expiryDate"
                type="text"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="Expiry Date (MM/YY)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-[#E52E71]"
              />
              <input
                name="cvv"
                type="text"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-[#E52E71]"
              />
            </div>
          </form>
        </div>

        {/* Total Amount Display */}
        <div className="mb-8 animate-on-scroll text-center">
          <h2 className="text-xl font-semibold text-[#E52E71] italic">
            Total Amount: <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </h2>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="bg-[#008EAA] hover:bg-[#E52E71] text-white w-full py-4 mt-4 font-semibold rounded-lg transition-colors duration-300 animate-on-scroll"
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
