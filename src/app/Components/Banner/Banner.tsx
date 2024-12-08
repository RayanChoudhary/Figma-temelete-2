import type { NextPage } from 'next';

const Banners: NextPage = () => {
  return (
    <div className="w-full relative bg-[#2a254b] h-[41px] text-left text-white text-sm font-satoshi">
      {/* Close Icon (Cross) */}
      <div className="absolute top-[8px] right-[16px] w-[24px] h-[24px] flex items-center justify-center cursor-pointer">
        <span className="text-white text-lg font-bold">×</span> {/* Cross Icon */}
      </div>
      
      {/* Delivery Section */}
      <div className="absolute top-[11px] left-[50%] transform -translate-x-[204px] flex items-center gap-2">
        <div className="w-[16px] h-[16px] relative flex-shrink-0 overflow-hidden">
          {/* You can replace this with your own custom delivery icon or leave as text */}
        </div>
        <div className="relative">
          Free delivery on all orders over £50 with code easter checkout
        </div>
      </div>
    </div>
  );
};

export default Banners;
