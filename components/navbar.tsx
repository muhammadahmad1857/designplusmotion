"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`flex max-md:bg-black md:bg-black/65 md:backdrop-blur-lg h-14  border-b border-white/30 items-center justify-between lg:justify-around  text-white sticky top-0 z-50 p-5 transition-all duration-300`}
      >
        <h1 className="text-3xl text-white">Logo</h1>
        <div className="md:flex gap-10 hidden">
          <Link href={"/"} className="text-white animated-border">
            Benefits
          </Link>
          <Link href={"/"} className="text-white animated-border">
            Our Work
          </Link>
          <Link href={"/"} className="text-white animated-border">
            Our Services
          </Link>
          <Link href={"/"} className="text-white animated-border">
            FAQ
          </Link>
          <Link href={"/"} className="btn p-3">
            Let&apos;s talk
          </Link>
        </div>
        <button
          className={`md:hidden block  rounded-lg ${isOpen && "bg-main"}`}
        >
          <Hamburger
            toggle={setIsOpen}
            toggled={isOpen}
            color="white"
            size={20}
            duration={0.8}
          />
        </button>
      </nav>

      {/* Drawer for small screens */}
      <div
        className={`fixed   w-full bg-black bottom-0  top-14 md:hidden block text-white z-40 transition-transform duration-500 ${
          isOpen ? "translate-y-0 border-2 border-main" : "-translate-y-full"
        }`}
        // style={{ height: "calc(100vh - 80px)", overflowY: "auto" }} // Adjust height
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-5 p-5">
          <Link href={"/"} className="text-white hover:text-main text-2xl">
            Benefits
          </Link>
          <Link href={"/"} className="text-white hover:text-main text-2xl">
            Our Work
          </Link>
          <Link href={"/"} className="text-white hover:text-main text-2xl">
            Our Services
          </Link>
          <Link href={"/"} className="text-white hover:text-main text-2xl">
            FAQ
          </Link>
          <Link href={"/"} className="btn p-6">
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
