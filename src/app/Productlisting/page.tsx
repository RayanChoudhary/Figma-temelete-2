import React from 'react'
import Listing_1 from '../Components/Listing_1/Listing_1'
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi'

const page = () => {
  return (
    <div>
      <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[209px] bg-cover bg-no-repeat bg-top text-left text-white text-3xl font-['Clash_Display']"
        style={{ backgroundImage: "url('/item17.png')" }}
      ></div>
      
      {/* Filter Bar */}
      <div className="w-full relative bg-white h-16 text-left text-gray-800 text-sm font-sans">
        {/* Filter Options */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-6 flex flex-row items-center gap-3">
          <div className="bg-white flex flex-row items-center px-4 py-2 gap-2 rounded shadow">
            <div className="relative">Category</div>
            <FiChevronDown size={16} className="text-gray-600" />
          </div>
          <div className="bg-white flex flex-row items-center px-4 py-2 gap-2 rounded shadow">
            <div className="relative">Product type</div>
            <FiChevronDown size={16} className="text-gray-600" />
          </div>
          <div className="bg-white flex flex-row items-center px-4 py-2 gap-2 rounded shadow">
            <div className="relative">Price</div>
            <FiChevronDown size={16} className="text-gray-600" />
          </div>
          <div className="bg-white flex flex-row items-center px-4 py-2 gap-2 rounded shadow">
            <div className="relative">Brand</div>
            <FiChevronDown size={16} className="text-gray-600" />
          </div>
        </div>

        {/* Sorting Options */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-6 flex flex-row items-center gap-4">
          <div className="relative">Sorting by:</div>
          <div className="bg-white flex flex-row items-center px-4 py-2 gap-2 rounded shadow">
            <div className="relative">Date added</div>
            <FiChevronDown size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-full mx-auto px-6 lg:px-20 py-12">
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
      <Listing_1/>
    
      <div className="max-w-full mx-auto px-6 lg:px-20 py-12">
    

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
          <div className="relative w-full h-80 sm:h-96">
            <Image
              className="object-cover"
              layout="fill"
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
    </div>
    </div>
  )
}

export default page