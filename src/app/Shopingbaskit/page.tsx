import type { NextPage } from "next";
import Image from "next/image";

const ShoppingBasket: NextPage = () => {
  return (
    <div className="w-full bg-white text-left text-[#2a254b] text-sm font-satoshi px-4 lg:px-12 py-8">
      {/* Shopping Cart Title */}
      <div className="text-2xl lg:text-4xl leading-[140%] font-clash-display mb-8 lg:mb-16">
        Your shopping cart
      </div>

      {/* Headers */}
      <div className=" grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] text-base leading-[140%] font-clash-display mb-4 hidden lg:grid">
        <div>Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Total</div>
      </div>

      {/* Product List */}
      <div className="space-y-8">
        {/* Product One */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <Image
            className="rounded-md object-cover"
            width={109}
            height={134}
            alt="Graystone Vase"
            src="/item3.jpg"
          />
          <div className="flex-1">
            <div className="text-lg lg:text-xl font-semibold">Graystone Vase</div>
            <div className="text-sm text-gray-600">
              <p>A timeless ceramic vase with</p>
              <p>a tri color grey glaze.</p>
            </div>
            <div className="text-lg lg:text-base mt-2 font-bold">£85</div>
          </div>
          <div className="flex justify-between items-center lg:w-40">
            <div className="bg-[#f9f9f9] flex items-center justify-between p-3 w-24 rounded-md text-base">
              <div className="text-gray-400 cursor-pointer">-</div>
              <div className="text-[#2a254b]">1</div>
              <div className="text-gray-400 cursor-pointer">+</div>
            </div>
            <div className="text-lg lg:text-right">£85</div>
          </div>
        </div>

        {/* Product Two */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <Image
            className="rounded-md object-cover"
            width={109}
            height={134}
            alt="Basic White Vase"
            src="/item7.jpg"
          />
          <div className="flex-1">
            <div className="text-lg lg:text-xl font-semibold">Basic White Vase</div>
            <div className="text-sm text-gray-600">
              <p>Beautiful and simple this is</p>
              <p>one for the classics</p>
            </div>
            <div className="text-lg lg:text-base mt-2 font-bold">£125</div>
          </div>
          <div className="flex justify-between items-center lg:w-40">
            <div className="bg-[#f9f9f9] flex items-center justify-between p-3 w-24 rounded-md text-base">
              <div className="text-gray-400 cursor-pointer">-</div>
              <div className="text-[#2a254b]">1</div>
              <div className="text-gray-400 cursor-pointer">+</div>
            </div>
            <div className="text-lg lg:text-right">£125</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ebe8f4] my-8" />

      {/* Pricing Information */}
      <div className="flex flex-col items-end space-y-4">
        <div className="flex justify-between w-full lg:w-auto">
          <div className="text-xl font-clash-display">Subtotal</div>
          <div className="text-2xl font-clash-display text-[#4e4d93]">£210</div>
        </div>
        <div className="text-sm text-gray-600">
          Taxes and shipping are calculated at checkout
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-8 text-center lg:text-right">
        <button className="px-6 py-3 bg-[#2a254b] text-white text-lg rounded-md hover:bg-[#1d1a3a]">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
