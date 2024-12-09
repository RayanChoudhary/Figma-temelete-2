import type { NextPage } from "next";
import Image from "next/image";

const Listing_1: NextPage = () => {
  return (
    <div>
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
              src="/item11.jpg"
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
              src="/item12.jpg"
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
              src="/item13.jpg"
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
              src="/item14.jpg"
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
  </div>
  </div>
  );
};

export default Listing_1;