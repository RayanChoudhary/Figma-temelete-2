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
//     {/* Product Image (Left Side) */}
//     <div className="lg:w-1/2 lg:order-1 mb-8 lg:mb-0">
//       <div className="relative w-full h-0 pb-[125%]">
//         <Image
//           className="rounded-md shadow-md"
//           layout="fill"
//           objectFit="cover"
//           alt="The Dandy Chair"
//           src="/item5.jpg"
//         />
//       </div>
//     </div>

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



import React from 'react'
import Features from '../Components/Features/Features'
import EmailSignUp from '../Components/Emailsignup/Emailsignup'
import Listings from '../Components/Listing/Listing'
import Productdetail from '../Components/Productdetail/productdetail'

const page = () => {
  return (
    <div>
      
      <Productdetail/>
      <Listings/>
      <Features/>
      <EmailSignUp/>
    </div>
  )
}

export default page
