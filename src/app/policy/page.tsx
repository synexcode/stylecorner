"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#008EAA] hover:text-[#E52E71] cursor-pointer">Privacy Policy</h1>

      <p className="mb-4">
At Style Corner, we value your privacy. We collect only the necessary personal information to
process your orders and provide a personalized experience. This includes your name, email
address, phone number, shipping address, and payment details.
We do not share your data with third parties, except for trusted partners involved in payment
processing and order fulfillment. Your information is securely stored and protected.
By using our website, you consent to our privacy policy      </p>

      {/* <h2 className="text-3xl font-bold mb-6 text-[#008EAA] hover:text-[#E52E71] cursor-pointer">Shipping Policy</h2> */}
            <h1 className="text-3xl font-bold mb-6 text-[#008EAA] hover:text-[#E52E71] cursor-pointer">Shipping Policy</h1>

      <p className="mb-4">
We process all orders within 2-4 business days. Once shipped, delivery times vary:
- Within Pakistan: 2-7 business days
- International (if applicable): 7-21 business days
Shipping charges are calculated at checkout. Once your order is dispatched, a tracking number will
be sent to you via email or SMS.
Note: We are not responsible for delays caused by courier services, weather conditions, or customs
processes.      </p>

      <h2 className="text-3xl font-bold mb-6 text-[#008EAA] hover:text-[#E52E71] cursor-pointer">Return & Exchange Policy</h2>
      <p className="mb-4">
If you receive a damaged, defective, or incorrect item, please contact us within 3 days of delivery
with proof (e.g., photos).
We accept exchanges only under the following conditions:
- The item must be unused and in its original packaging.
- You must request the exchange within 7 days of receiving the product.
We do not accept returns or exchanges for:
- Customized or made-to-order items
- Earrings (for hygiene reasons)
The customer bears the cost of return shipping unless the error was on our part.      </p>

      <h2 className="text-3xl font-bold mb-6 text-[#008EAA] hover:text-[#E52E71] cursor-pointer">Payment & Refund Policy</h2>
      <p className="mb-4">
We accept secure payments through bank transfers, JazzCash, EasyPaisa, and other available
methods on our checkout page.
Refunds are only issued:
- If we cancel your order due to unavailability or stock issues
- If a product is unavailable and you ve already paid
- If a damaged or incorrect product cannot be exchanged
Refunds will be processed within 7-10 business days to your original payment method.
For any concerns, please contact us via WhatsApp or email before submitting a refund request.      </p>

      <h2 className="text-3xl font-bold mb-6 text-[#008EAA] hover:text-[#E52E71] cursor-pointer">4. Contact Us</h2>
      <p className="mb-4">
        If you have any questions, feel free to contact us at <span className="text-[#008EAA]">emailll </span>.
      </p>

      {/* <p className="mt-10 text-sm text-gray-500">Last updated: June 18, 2025</p> */}
    </div>
  );
}
