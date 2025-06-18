"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {  toast } from 'react-toastify';


type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const AddToWishlistButton = ({ product }: { product: WishlistItem }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem("wishlist");
    const wishlist: WishlistItem[] = existing ? JSON.parse(existing) : [];
    const exists = wishlist.find((item) => item.id === product.id);
    setIsInWishlist(!!exists);
  }, [product.id]);

  const handleToggleWishlist = () => {
    const existing = localStorage.getItem("wishlist");
    const wishlist: WishlistItem[] = existing ? JSON.parse(existing) : [];

    const index = wishlist.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      // Remove from wishlist
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsInWishlist(false);
      toast.error("❤ Item Remove to wishlist!", {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
    } else {
      // Add to wishlist
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsInWishlist(true);
      toast.success("❤ Item Add to wishlist!", {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
    }
  };

  return (
    <button onClick={handleToggleWishlist}>
      {isInWishlist ? (
        <FaHeart className="text-[20px] text-red-500 hover:scale-110 transition" />
      ) : (
        <FaRegHeart className="text-[20px] text-pink-500 hover:scale-110 transition" />
      )}
    </button>
  );
};

export default AddToWishlistButton;
