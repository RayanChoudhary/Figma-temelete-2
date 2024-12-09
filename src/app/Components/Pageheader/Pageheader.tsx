import type { NextPage } from 'next';

const PageHeaders: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-100 h-auto text-left text-gray-900 font-['Clash_Display'] p-6 sm:py-12 sm:px-8 lg:px-20">
      {/* Text Section */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-md lg:max-w-lg">
          A brand built on the love of craftmanship, <br /> quality, and outstanding customer service
        </h1>
      </div>

      {/* Button Section */}
      <div className="flex justify-start lg:justify-end">
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md text-base sm:text-lg lg:text-xl font-sans hover:bg-gray-200 transition">
          View our products
        </button>
      </div>
    </div>
  );
};

export default PageHeaders;