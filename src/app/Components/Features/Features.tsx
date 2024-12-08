import type { NextPage } from 'next';
import Image from "next/image";

const Features: NextPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 py-12">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <div className="mb-6">
          <div className="text-lg font-semibold text-gray-800">
            <p className="text-xl text-gray-600">From a studio in London to a global brand with</p>
            <p className="text-xl text-gray-600">over 400 outlets</p>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg text-gray-700">
            {`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.`}
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300">
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2">
        <Image className="rounded-lg shadow-lg" width={720} height={603} alt="Avion furniture" src="/item6.jpg" />
      </div>
    </div>
  );
};

export default Features;
