import React from 'react';
import Image from 'next/image';

const FirstPage = () => {
  return (
    <div>
      {/* First Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-screen">
          <Image
            src="/firstpic.jpeg"
            alt="Modern furniture display"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900 mb-6">
              Homeware that puts quality and style at the heart of its brand
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              With our new collection, view over 400 bespoke pieces from homeware through to furniture today
            </p>
            <button className="text-gray-900 p-0 h-auto font-normal text-lg hover:no-underline">
              View collection
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}
export default FirstPage;