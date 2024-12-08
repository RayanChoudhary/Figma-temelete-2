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
      // Second Section
      // <main className="relative min-h-screen w-full"> */}
        // {/* Background Image Container */}
        {/* <div className="absolute inset-0">
          <Image
            src="/firstpic.jpeg"
            alt="Luxury homeware background"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div> */}

        {/* Content Overlay */}
        {/* <div className="relative flex min-h-screen items-center justify-end px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-8 lg:p-12 max-w-xl w-full mr-0 lg:mr-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900 mb-4">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Shop the new Spring 2022 collection today
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none text-lg">
              View collection
            </button>
          </div>
        </div>
      </main>

      Third Section */}
      

      {/* <div className="flex flex-col lg:flex-row min-h-screen border-3 border-blue-500 rounded-lg p-20"> */}
        {/* Left Section - Content */}
        {/* <div className="w-full lg:w-1/2 bg-[#1E1B3A] flex flex-col justify-between p-8 lg:p-16">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-8">
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="text-white bg-slate-700 border-white/20 hover:bg-white/10 rounded-none px-8 py-6">
              View collection
            </button>
          </div>
          <p className="text-white/80 text-lg max-w-xl mt-8">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div> */}

        {/* Right Section - Image */}
        {/* <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-screen bg-[#89A7A7]">
          <Image
            src="/secpic.png"
            alt="Modern black chair"
            className="object-contain p-8 lg:p-16"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>
      </div>
    </div> */}



