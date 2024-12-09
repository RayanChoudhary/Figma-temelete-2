import type { NextPage } from "next";
import Image from "next/image";

const Popularproduct: NextPage = () => {
  return (
    <div>
    <div className="w-full bg-white text-[#2a254b] text-[20px] font-display py-12">
      {/* Section Title */}
      <div className="text-center text-[32px] sm:text-4xl font-semibold leading-[140%] mb-12">
        Our Popular Products
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-12">
        {/* Product 1 */}
        <div className="flex flex-col items-center gap-6">
          <Image
            className="w-[305px] h-[375px] object-cover"
            width={305}
            height={375}
            alt="Wood Chair"
            src="/item9.jpg"
          />
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-[20px] leading-[140%]">Wood Chair</div>
            <div className="text-[18px] leading-[150%] font-satoshi">£250</div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center gap-6">
          <Image
            className="w-[305px] h-[375px] object-cover"
            width={305}
            height={375}
            alt="The Dandy Chair"
            src="/secpic.png"
          />
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-[20px] leading-[140%]">The Dandy Chair</div>
            <div className="text-[18px] leading-[150%] font-satoshi">£250</div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center gap-6">
          <Image
            className="w-[630px] h-[375px] object-cover"
            width={630}
            height={375}
            alt="The Poplar Suede Sofa"
            src="/item8.jpg"
          />
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-[20px] leading-[140%]">The Poplar Suede Sofa</div>
            <div className="text-[18px] leading-[150%] font-satoshi">£980</div>
          </div>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#f9f9f9] py-4 px-8 text-[16px] font-satoshi text-[#2a254b] rounded-lg hover:bg-gray-200 transition">
          View Collection
        </button>
      </div>
    </div>
  </div>
  );
};

export default Popularproduct;