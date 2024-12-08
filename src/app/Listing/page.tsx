import type { NextPage } from "next";
import Image from "next/image";

const Listings: NextPage = () => {
  return (
    <div>

    <div className="max-w-full mx-auto px-6 lg:px-20 py-12">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        New Ceramics
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-60 relative">
            <Image
              className="object-cover"
              fill
              alt="The Dandy Chair"
              src="/secpic.png"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              The Dandy Chair
            </h3>
            <p className="text-gray-500 mt-2">£250</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-60 relative">
            <Image
              className="object-cover"
              fill
              alt="Rustic Vase Set"
              src="/item1.jpg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Rustic Vase Set
            </h3>
            <p className="text-gray-500 mt-2">£155</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-60 relative">
            <Image
              className="object-cover"
              fill
              alt="The Silky Vase"
              src="/item3.jpg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              The Silky Vase
            </h3>
            <p className="text-gray-500 mt-2">£125</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-60 relative">
            <Image
              className="object-cover"
              fill
              alt="The Lucy Lamp"
              src="/item4.jpg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              The Lucy Lamp
            </h3>
            <p className="text-gray-500 mt-2">£399</p>
          </div>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gray-800 text-white text-lg rounded-lg hover:bg-gray-700">
          View Collection
        </button>
      </div>
    </div>
    
<div className="w-full relative bg-white h-[744px] text-left text-[#2a254b] text-[20px] font-display">
  <div className="absolute top-[64px] left-[80px] text-[32px] leading-[140%]">Our popular products</div>

  <div className="absolute top-[calc(50%-236px)] left-[calc(50%+10px)] flex flex-col items-start justify-start gap-6">
    <Image className="w-[305px] h-[375px] object-cover" width={305} height={375} alt="" src="/item9.jpg" />
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="relative leading-[140%]">Wood chair</div>
      <div className="relative text-[18px] leading-[150%] font-satoshi">£250</div>
    </div>
  </div>

  <div className="absolute top-[calc(50%-236px)] left-[calc(50%+335px)] flex flex-col items-start justify-start gap-6">
    <Image className="w-[305px] h-[375px] object-cover" width={305} height={375} alt="" src="/secpic.png" />
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="relative leading-[140%]">The Dandy chair</div>
      <div className="relative text-[18px] leading-[150%] font-satoshi">£250</div>
    </div>
  </div>

  <div className="absolute top-[640px] left-[635px] bg-[#f9f9f9] overflow-hidden flex flex-row items-center justify-center py-4 px-8 text-[16px] font-satoshi">
    <div className="relative leading-[150%]">View collection</div>
  </div>

  <div className="absolute top-[calc(50%-238px)] left-[calc(50%-640px)] flex flex-col items-start justify-start gap-6">
    <Image className="w-[630px] h-[375px] object-cover" width={630} height={375} alt="" src="/item8.jpg" />
    <div className="flex flex-col items-start justify-start gap-2">
      <div className="relative leading-[140%]">The Poplar suede sofa</div>
      <div className="relative text-[18px] leading-[150%] font-satoshi">£980</div>
    </div>
  </div>
</div>
</div>
  );
};

export default Listings;
