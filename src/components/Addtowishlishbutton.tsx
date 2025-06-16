"use client";
import { FaRegHeart } from "react-icons/fa";
import React from "react";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const AddToWishlistButton = ({ product }: { product: WishlistItem }) => {
  const handleAddToWishlist = () => {
    const existing = localStorage.getItem("wishlist");
    const wishlist = existing ? JSON.parse(existing) : [];

    const exists = wishlist.find((item: WishlistItem) => item.id === product.id);
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to wishlist ❤️");
    } else {
      alert("Already in wishlist!");
    }
  };

  return (
    <button onClick={handleAddToWishlist}>
      <FaRegHeart className="text-[20px] text-pink-500 hover:scale-110 transition" />
    </button>
  );
};

export default AddToWishlistButton;
