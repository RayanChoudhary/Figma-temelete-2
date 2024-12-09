"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-4 sm:px-6 lg:px-10 mx-auto">
        {/* Top Section */}
        <div className="border-b-[0.5px] border-gray-300 h-1/2 w-full flex justify-between items-center">
          {/* Left: Search Icon */}
          <div className="flex items-center gap-3 lg:flex-1">
            <div className="hidden lg:block">
              <IoSearch className="text-2xl text-gray-700 cursor-pointer hover:text-gray-500" />
            </div>
          </div>

          {/* Avion Title */}
          <h1 className="text-gray-900 text-2xl font-semibold text-left lg:text-center">
            Avion
          </h1>

          {/* Right: Cart and Profile Icons */}
          <div className="hidden lg:flex gap-4 text-2xl lg:flex-1 justify-end">
            <MdOutlineShoppingCart className="cursor-pointer hover:text-gray-500" />
            <CgProfile className="cursor-pointer hover:text-gray-500" />
          </div>

          {/* Mobile Menu Trigger */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden flex flex-col gap-1"
          >
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-[132px] left-0 w-full bg-white z-50 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-4 p-6 text-lg text-gray-700">
              <Link href="/" className="hover:text-gray-500">
                Home
              </Link>
              <Link href="/About" className="hover:text-gray-500">
                About
              </Link>
              <Link href="/Productlisting" className="hover:text-gray-500">
                Productlisting
              </Link>
              <Link href="/Productdetail" className="hover:text-gray-500">
                Product Detail
              </Link>
              <Link href="/Shopingbaskit" className="hover:text-gray-500">
                Shopping Baskit
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-gray-700">
          <Link
            href="/"
            className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500 pb-1"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500 pb-1"
          >
            About
          </Link>
          <Link
            href="/Productlisting"
            className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500 pb-1"
          >
            Productlisting
          </Link>
          <Link
            href="/Productdetail"
            className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500 pb-1"
          >
            Product Detail
          </Link>
          <Link
            href="/Shopingbaskit"
            className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500 pb-1"
          >
            Shopping Baskit
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
