"use client";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const AddToCartButton = ({ product }: { product: CartItem }) => {
 
  const handleAddToCart = () => {
    const stored = localStorage.getItem("cart");
    const cartItems: CartItem[] = stored ? JSON.parse(stored) : [];

    const existingIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      // ✅ If product already exists, increase quantity
      cartItems[existingIndex].quantity += product.quantity;
    } else {
      // ✅ Add new product with quantity 1
      cartItems.push({ ...product });
    }
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
   const updatedCart = [...existingCart, product];
   localStorage.setItem("cart", JSON.stringify(updatedCart));
  
  // Add this:
  window.dispatchEvent(new Event("cartUpdated")); 
    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success("🛒 Item added to cart!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  };


  return ( 
    <div>
      <button
      onClick={handleAddToCart}
      className="group flex items-center text-center justify-center gap-1 cursor-pointer text-styleWhite bg-stylePink hover:bg-styleBlue text-[14px] border-styleBlue duration-300 px-4 py-2 rounded"
    >
      Add to cart
    </button>
    <ToastContainer />
    </div>
  );
};

export default AddToCartButton;



// "use client";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// };

// const AddToCartButton = ({ product }: { product: CartItem }) => {
//   const handleAddToCart = () => {
//     const stored = localStorage.getItem("cart");
//     const cartItems: CartItem[] = stored ? JSON.parse(stored) : [];

//     const existingIndex = cartItems.findIndex((item) => item.id === product.id);

//     if (existingIndex !== -1) {
//       // ✅ If product already exists, increase quantity
//       cartItems[existingIndex].quantity += product.quantity;
//     } else {
//       // ✅ Add new product with quantity
//       cartItems.push({ ...product });
//     }

//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     window.dispatchEvent(new Event("cartUpdated"));

//     toast.success("🛒 Item added to cart!", {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   return (
//     <>
//       <button
//         onClick={handleAddToCart}
//         className="group flex items-center text-center justify-center gap-1 cursor-pointer text-styleWhite bg-stylePink hover:bg-styleBlue text-[14px] border-styleBlue duration-300 px-4 py-2 rounded"
//       >
//         Add to cart
//       </button>
//       <ToastContainer />
//     </>
//   );
// };

// export default AddToCartButton;
