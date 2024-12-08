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
      <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          {/* Left: Search icon on large screens */}
          <div className="flex items-center gap-3 lg:flex-1">
            <div className="lg:block hidden">
            <IoSearch />
            </div>
          </div>

          {/* Avion Title */}
          <h1 className="text-[#22202E] text-2xl font-semibold text-left lg:text-center">
            Avion
          </h1>

          {/* Right: Cart and Profile icons for large screens */}
          <div className="hidden lg:flex gap-3 text-xl lg:flex-1 justify-end">
            <MdOutlineShoppingCart />
            <CgProfile />
          </div>

          {/* Mobile Menu Trigger */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden flex flex-col gap-1 font-light"
          >
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-[132px] left-0 w-full bg-white z-50 shadow-lg">
            <nav className="flex flex-col gap-4 p-6 text-lg text-[#726E8D]">
    
              <Link href="/" className="hover:text-[#5a526c]">
                Home
              </Link>
              <Link href="/Features" className="hover:text-[#5a526c]">
              Features
              </Link>
              <Link href="/Listing" className="hover:text-[#5a526c]">
              Listing
              </Link>
              <Link href="/Productdetail" className="hover:text-[#5a526c]">
              Productdetail
              </Link>
              <Link href="/Shopingbaskit" className="hover:text-[#5a526c]">
              Shopingbaskit
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          
          
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Home
          </Link>
          
          <Link
            href="/Features"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Features
          </Link>
          <Link
            href="/Listing"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Listing
          </Link>
          <Link
            href="/Productdetail"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Productdetail
          </Link>
          <Link
            href="/Shopingbaskit"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Shopingbaskit
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
