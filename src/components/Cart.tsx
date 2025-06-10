"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("cartItems");
        if (stored) {
            setCartItems(JSON.parse(stored));
        }
    }, []);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">🛒 Your Cart</h1>
                <div className="space-y-6">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 bg-pink-50 rounded-xl p-4 shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg border-2 border-pink-200"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-pink-500 font-bold">Rs. {item.price}</p>
                                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                                </div>
                                <button className="text-red-500 hover:text-red-700 font-bold text-xl transition">×</button>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-8 flex justify-between items-center border-t pt-6">
                    <span className="text-xl font-bold text-gray-700">Total:</span>
                    <span className="text-2xl font-extrabold text-pink-600">Rs. {total}</span>
                </div>
                <Link href="/checkout" className="block">
                <button className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg">
                    Proceed to Checkout
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;        