import type { NextPage } from "next";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";

const Features: NextPage = () => {
  return (
    <div className="w-full bg-white py-12 px-6 lg:py-20 lg:px-16">
      {/* Section Title */}
      <div className="text-center text-2xl lg:text-3xl font-semibold text-[#2a254b] mb-12">
        What makes our brand different
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center gap-4">
        <TbTruckDelivery />
    
          <div className="text-lg font-medium text-[#2a254b]">Next day as standard</div>
          <p className="text-sm text-gray-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center gap-4">
        <IoCheckmarkCircleOutline />
          <div className="text-lg font-medium text-[#2a254b]">Recycled packaging</div>
          <p className="text-sm text-gray-600">
            We use 100% recycled packaging to ensure our footprint is manageable.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center gap-4">
        <GoCreditCard />
          <div className="text-lg font-medium text-[#2a254b]">Unbeatable prices</div>
          <p className="text-sm text-gray-600">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center gap-4">
        <LuSprout />
          <div className="text-lg font-medium text-[#2a254b]">Made by true artisans</div>
          <p className="text-sm text-gray-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
