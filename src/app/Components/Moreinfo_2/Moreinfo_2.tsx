import type { NextPage } from 'next';
import Image from "next/image";

const Moreinfo_2: NextPage = () => {
  return (
    <div className="relative w-full h-auto lg:h-[603px] flex flex-col lg:flex-row">
      {/* Image Block */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          width={720}
          height={603}
          alt="Image Block"
          src="/item15.jpg"
        />
      </div>

      {/* Right Content Block */}
      <div className="w-full lg:w-1/2 bg-[#f9f9f9] p-6 lg:p-8 flex flex-col justify-between">
        {/* Top Content */}
        <div className="space-y-6">
          {/* Our service isn't */}
          <div className="space-y-2">
            <p className="text-lg lg:text-2xl font-clash-display text-[#505977]">Our service isn’t just personal, it’s actually</p>
            <p className="text-lg lg:text-2xl font-clash-display text-[#505977]">hyper personally exquisite</p>
          </div>

          {/* When we started */}
          <div className="text-sm lg:text-base text-[#505977] font-satoshi max-w-full lg:max-w-[536px]">
            <p>
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="mt-2">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-white text-[#2a254b] py-2 px-6 rounded-md text-sm lg:text-base font-satoshi hover:bg-gray-100">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moreinfo_2;
