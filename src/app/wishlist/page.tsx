"use client";
import React, { useEffect, useState } from "react";

interface WishlistItem {
    id: string;
    title: string;
    image: string;
    price: number;
}

const WishlistPage: React.FC = () => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("wishlist");
        if (stored) {
            setWishlist(JSON.parse(stored));
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-10 px-4">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-8 drop-shadow-lg">
                Your Wishlist
            </h1>
            {wishlist.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">
                    Your wishlist is empty!
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {wishlist.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 object-cover rounded-lg mb-4 border-4 border-purple-200"
                            />
                            <h2 className="text-xl font-semibold text-purple-800 mb-2 text-center">
                                {item.title}
                            </h2>
                            <p className="text-lg font-bold text-pink-600 mb-2">
                                Rs. {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistPage;