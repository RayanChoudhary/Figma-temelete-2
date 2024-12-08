import type { NextPage } from 'next';
import Image from "next/image";

const ShoppingBasket: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[749px] text-left text-[#2a254b] text-sm font-satoshi">
      {/* Shopping Cart Title */}
      <div className="absolute top-[64px] left-[188px] text-4xl leading-[140%] font-clash-display">
        Your shopping cart
      </div>

      {/* Product, Quantity, Total headers */}
      <div className="absolute top-[162px] left-[188px] text-base leading-[140%] font-clash-display">
        Product
      </div>
      <div className="absolute top-[162px] left-[838px] text-base leading-[140%] font-clash-display">
        Quantity
      </div>
      <div className="absolute top-[162px] left-[1212px] text-base leading-[140%] font-clash-display">
        Total
      </div>

      {/* Product prices */}
      <div className="absolute top-[225px] left-[1212px] text-lg leading-[150%]">
        £85
      </div>
      <div className="absolute top-[380px] left-[1209px] text-lg leading-[150%]">
        £125
      </div>

      {/* Product One */}
      <div className="absolute top-[214px] left-[188px] flex gap-5 items-center font-semibold text-lg">
        <Image className="w-[109px] h-[134px] object-cover" width={109} height={134} alt="Product 1" src="/item3.jpg" />
        <div className="flex flex-col gap-2">
          <div className="text-xl">Graystone vase</div>
          <div className="text-sm">
            <p>A timeless ceramic vase with</p>
            <p>a tri color grey glaze.</p>
          </div>
          <div className="text-base">£85</div>
        </div>
      </div>

      {/* Product Two */}
      <div className="absolute top-[368px] left-[188px] flex gap-5 items-center font-semibold text-lg">
        <Image className="w-[109px] h-[134px] object-cover" width={109} height={134} alt="Product 2" src="/item7.jpg" />
        <div className="flex flex-col gap-2">
          <div className="text-xl">Basic white vase</div>
          <div className="text-sm">
            <p>Beautiful and simple this is</p>
            <p>one for the classics</p>
          </div>
          <div className="text-base">£85</div>
        </div>
      </div>

      {/* Dividers */}
      <div className="absolute top-[193.5px] left-[187.5px] border-t border-[#ebe8f4] w-[1065px]" />
      <div className="absolute top-[533.5px] left-[187.5px] border-t border-[#ebe8f4] w-[1065px]" />

      {/* Pricing Information */}
      <div className="absolute top-[562px] left-[970px] flex flex-col gap-3 items-end text-right font-clash-display text-xl text-[#4e4d93]">
        <div className="flex gap-4 items-center">
          <div className="leading-[140%]">Subtotal</div>
          <div className="text-2xl leading-[140%]">£210</div>
        </div>
        <div className="text-sm leading-[150%] font-satoshi">
          Taxes and shipping are calculated at checkout
        </div>
      </div>

      {/* Stepper */}
      <div className="absolute top-[226px] left-[838px] bg-[#f9f9f9] w-[122px] flex items-center justify-between p-[12px_16px] box-border text-[#ebe8f4] text-base">
        <div>-</div>
        <div className="text-[#2a254b]">1</div>
        <div>+</div>
      </div>
      <div className="absolute top-[380px] left-[838px] bg-[#f9f9f9] w-[122px] flex items-center justify-between p-[12px_16px] box-border text-[#ebe8f4] text-base">
        <div>-</div>
        <div className="text-[#2a254b]">1</div>
        <div>+</div>
      </div>

      {/* Checkout Button */}
      <div className="absolute top-[645px] left-[1080px] bg-[#2a254b] flex items-start justify-start p-[16px_32px] text-white text-base">
        Go to checkout
      </div>
    </div>
  );
};

export default ShoppingBasket;
