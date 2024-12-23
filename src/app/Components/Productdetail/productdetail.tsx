// "use client"

// import type { NextPage } from "next";
// import Image from "next/image";
// import { useState } from "react";

// const ProductDetails: NextPage = () => {
//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10)); // Max quantity 10
//   const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1)); // Min quantity 1

//   return (
//     <div className="lg:flex lg:items-start lg:space-x-16"> {/* Increased the gap */}
//     {/* Product Details (Right Side) */}
//     <div className="lg:w-1/2 lg:order-2">
//       {/* Top Text: Product Title and Price */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-semibold text-gray-800">The Dandy Chair</h1>
//         <p className="text-2xl font-medium text-gray-600">£250</p>
//       </div>
  
//       {/* Dimensions Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Dimensions</h2>
//         <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-8">
//           <div>
//             <h3 className="text-sm text-gray-500">Height</h3>
//             <p className="text-lg text-gray-800">110cm</p>
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-500">Width</h3>
//             <p className="text-lg text-gray-800">75cm</p>
//           </div>
//           <div>
//             <h3 className="text-sm text-gray-500">Depth</h3>
//             <p className="text-lg text-gray-800">50cm</p>
//           </div>
//         </div>
//       </div>
  
//       {/* Product Description */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Product Description</h2>
//         <p className="text-gray-600 leading-relaxed">
//           A timeless design, with premium materials, features as one of our most popular and
//           iconic pieces. The Dandy Chair is perfect for any stylish living space with beech
//           legs and lambskin leather upholstery.
//         </p>
//       </div>
  
//       {/* Call-to-Actions */}
//       <div className="flex flex-wrap gap-4 mb-8">
//         <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
//           Add to Cart
//         </button>
//         <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
//           Save to Favorites
//         </button>
//       </div>
  
//       {/* Quantity Selector */}
//       <div className="flex items-center space-x-4">
//         <h2 className="text-xl font-semibold text-gray-700">Quantity</h2>
//         <div className="flex items-center border rounded-lg divide-x divide-gray-300">
//           <button
//             onClick={decreaseQuantity}
//             className="px-4 py-2 text-gray-700 hover:bg-gray-100"
//             aria-label="Decrease Quantity"
//           >
//             -
//           </button>
//           <div className="px-6 py-2 text-gray-800">{quantity}</div>
//           <button
//             onClick={increaseQuantity}
//             className="px-4 py-2 text-gray-700 hover:bg-gray-100"
//             aria-label="Increase Quantity"
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
  
//   </div>
//   )
// }  

// export default ProductDetails;


import type { NextPage } from 'next';
import Image from 'next/image';

const Productdetail: NextPage = () => {
  return (
    <div className="relative bg-white w-full max-w-screen-lg mx-auto px-6 py-8">
      {/* Main Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image (Left Side) */}
        <div className="relative w-full h-80 lg:h-auto">
          <Image
            className="rounded-md shadow-md object-cover"
            layout="fill"
            objectFit="cover"
            alt="The Dandy Chair"
            src="/item5.jpg"
          />
        </div>

        {/* Text Content (Right Side) */}
        <div className="flex flex-col gap-8">
          {/* Product Info Section */}
          <div className="flex flex-col gap-3 text-gray-800">
            <h1 className="text-2xl lg:text-3xl font-bold">The Dandy Chair</h1>
            <span className="text-xl font-semibold">£250</span>
          </div>

          {/* Description Section */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-bold text-gray-800">Description</div>
            <div className="text-sm text-gray-600">
              <p>
                A timeless design, with premium materials features as one of our most popular and iconic pieces. The
                dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>
          </div>

          {/* Dimensions Section */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-bold text-gray-800">Dimensions</div>
            <div className="flex flex-wrap gap-8 text-sm">
              <div className="flex flex-col gap-2">
                <span className="text-gray-800">Height</span>
                <span className="text-gray-600">110cm</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-800">Width</span>
                <span className="text-gray-600">75cm</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-800">Depth</span>
                <span className="text-gray-600">50cm</span>
              </div>
            </div>
          </div>

          {/* Amount Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-gray-800">Amount:</span>
              <div className="flex items-center justify-between w-32 bg-gray-100 px-4 py-2 rounded">
                <button className="text-gray-400">-</button>
                <span className="text-gray-800">1</span>
                <button className="text-gray-400">+</button>
              </div>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white rounded text-sm">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
