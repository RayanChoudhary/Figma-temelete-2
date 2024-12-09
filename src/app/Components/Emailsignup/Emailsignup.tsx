import type { NextPage } from "next";

const EmailSignUp: NextPage = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-6 lg:py-16">
      {/* Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 lg:p-12">
        {/* Text Content */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#2a254b] mb-4">
            Join the club and get the benefits
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
        </div>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 bg-gray-100 px-4 py-3 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a254b] text-sm"
          />
          <button className="w-full sm:w-auto bg-[#2a254b] text-white px-6 py-3 rounded-md text-sm lg:text-base font-medium hover:bg-[#3b316a] transition">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;
