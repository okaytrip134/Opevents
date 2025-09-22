'use client'

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e: { key: string; }) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full bg-white flex justify-between items-center px-4 sm:px-8 md:px-12 h-20 md:h-28 border-b border-gray-200" style={{ fontFamily: "var(--font-primary)" }}>
        {/* Left Links */}
        <nav className="flex items-center text-center space-x-4 sm:space-x-6 md:space-x-8 tracking-widest text-black uppercase cursor-pointer">
          <Link href="#" className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">Home</Link>
          <Link href="/about" className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">About</Link>
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">Portfolio</a>
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">Wedding<br />Planning</a>
        </nav>

        {/* Logo */}
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest cursor-pointer"
          style={{ fontFamily: "var(--font-font-third)" }}
        >
          AS PRODUCTIONS
        </h1>

        {/* Right Links */}
        <nav className="flex items-center text-center space-x-4 sm:space-x-6 md:space-x-8 tracking-widest text-black uppercase cursor-pointer">
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">Event<br />Planning</a>
          <a href="#" className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">Blog</a>
          <a href="#" className="italic underline font-[--font-primary] text-[12px] sm:text-[13px] md:text-[13px] lg:text-[13px]">Inquire</a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="ml-2 sm:ml-4 flex flex-col space-y-1"
          >
            <span className="block w-5 sm:w-6 h-[2px] sm:h-[3px] bg-black"></span>
            <span className="block w-5 sm:w-6 h-[2px] sm:h-[3px] bg-black"></span>
            <span className="block w-5 sm:w-6 h-[2px] sm:h-[3px] bg-black"></span>
          </button>
        </nav>
      </header>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#97A5A7] text-white flex z-50">
          {/* Left Side */}
          <div className="w-1/2 p-6 sm:p-12 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-none">
              LU<br />XE
            </h2>

            {/* Social icons */}
            <div className="flex space-x-3 sm:space-x-4 mt-6 text-base sm:text-xl">
              <a href="#">🎵</a>
              <a href="#">📸</a>
              <a href="#">📘</a>
              <a href="#">📌</a>
            </div>

            {/* Image */}
            <div className="mt-8 sm:mt-10">
              <img
                src="your-image.jpg"
                alt="Wedding Event"
                className="w-52 sm:w-64 md:w-80 object-cover"
              />
            </div>

            {/* Text */}
            <p className="mt-6 text-xs sm:text-sm md:text-base max-w-xs">
              Serving the great Wild West, our teams are based in Portland Oregon
              and Seattle Washington.
            </p>
            <p className="mt-4 text-xs sm:text-sm md:text-base max-w-xs">
              We believe that there&apos;s not much a dance party won’t cure.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-1/2 p-6 sm:p-12 flex flex-col justify-center items-start space-y-4 sm:space-y-6">
            {[
              "Home",
              "About",
              "Portfolio",
              "Weddings",
              "Queer Weddings",
              "Special Events",
              "Blog",
              "Contact",
            ].map((item, idx) => (
              <div key={item} className="flex items-baseline space-x-2 sm:space-x-3">
                <span className="text-[10px] sm:text-xs">{`0${idx + 1}`}</span>
                <a
                  href="#"
                  className="text-2xl sm:text-3xl md:text-4xl hover:opacity-70"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 sm:top-8 right-6 sm:right-10 text-white text-xl sm:text-2xl"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
