import type { NextPage } from "next";
import Image from "next/image";

const Moreinfo_1: NextPage = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-stretch justify-between px-6 lg:px-20 py-12 gap-6">
      {/* Text Block */}
      <div className="w-full lg:w-1/2 bg-[#2a254b] text-white p-6 lg:p-8 flex flex-col justify-between h-auto lg:h-[478px]">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-clash-display">
            It started with a small idea
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-satoshi max-w-full sm:max-w-md">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
        </div>
        <button className="bg-gray-50 text-[#2a254b] py-2 px-6 rounded-md text-sm sm:text-base font-satoshi mt-6 hover:bg-gray-100">
          View collection
        </button>
      </div>

      {/* Image Block */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[478px]">
        <Image
          className="w-full h-full object-cover"
          width={630}
          height={478}
          alt="Image Block"
          src="/item16.jpg"
        />
      </div>
    </div>
  );
};

export default Moreinfo_1;
