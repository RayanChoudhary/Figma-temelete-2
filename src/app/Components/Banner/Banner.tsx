import type { NextPage } from 'next';

const Banners: NextPage = () => {
  return (
    <div className="w-full relative bg-[#2a254b] h-auto text-left text-white text-sm font-satoshi px-4 py-2">
      {/* Close Icon (Cross) */}
      <div className="absolute top-[8px] right-[16px] w-[24px] h-[24px] flex items-center justify-center cursor-pointer sm:top-2 sm:right-4">
        <span className="text-white text-lg font-bold">×</span> {/* Cross Icon */}
      </div>

      {/* Delivery Section */}
      <div className="flex justify-center items-center text-center gap-2">
        <div className="hidden sm:inline-block w-[16px] h-[16px] flex-shrink-0 overflow-hidden">
          {/* Add a delivery icon or an SVG here */}
        </div>
        <div className="text-sm leading-snug sm:text-base">
          Free delivery on all orders over £50 with code <b>easter checkout</b>
        </div>
      </div>
    </div>
  );
};

export default Banners;