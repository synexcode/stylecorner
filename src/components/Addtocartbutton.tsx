"use client";
import React from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const AddToCartButton = ({ product }: { product: CartItem }) => {
  const handleAddToCart = () => {
    const stored = localStorage.getItem("cartItems");
    const cartItems: CartItem[] = stored ? JSON.parse(stored) : [];

    const existingIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      // ✅ If product already exists, increase quantity
      cartItems[existingIndex].quantity += product.quantity;
    } else {
      // ✅ Add new product with quantity 1
      cartItems.push({ ...product });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart! 🛒");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="group flex items-center text-center justify-center gap-1 cursor-pointer text-styleWhite bg-stylePink hover:bg-styleBlue text-[14px] border-styleBlue duration-300 px-4 py-2 rounded"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
