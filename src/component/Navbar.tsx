"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import EnquiryForm from "./EnquiryForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  // ✅ Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setFormOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header
        className="w-full bg-white flex justify-between items-center px-4 lg:px-12 h-20 lg:h-24 border-b border-gray-200"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        {/* Left Links (Desktop only) */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase text-black">
          <Link href="#">Home</Link>
          <Link href="/about">About</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Wedding Planning</Link>
        </nav>

        {/* Logo */}
        <h1
          className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide cursor-pointer text-center flex-1 lg:flex-none"
          style={{ fontFamily: "var(--font-fourth)" }}
        >
          OpulentsEvents
        </h1>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Right Links (Desktop only) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase text-black">
            <Link href="#">Event Planning</Link>
            <Link href="#">Blog</Link>
            <button
              onClick={() => setFormOpen(true)}
              className="italic underline"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Inquire
            </button>
          </nav>

          {/* Hamburger (Always visible) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col space-y-1"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-black"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
            <span className="block w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#97A5A7] text-white flex flex-col lg:flex-row z-50">
          {/* Left Side */}
          <div className="lg:w-1/2 p-6 sm:p-12 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
              LU<br />XE
            </h2>

            <div className="flex space-x-4 mt-6 text-lg">
              <a href="#">🎵</a>
              <a href="#">📸</a>
              <a href="#">📘</a>
              <a href="#">📌</a>
            </div>

            <div className="mt-8 sm:mt-10">
              <img
                src="your-image.jpg"
                alt="Wedding Event"
                className="w-52 sm:w-64 lg:w-80 object-cover"
              />
            </div>

            <p className="mt-6 text-sm max-w-xs">
              Serving the great Wild West, our teams are based in Portland Oregon
              and Seattle Washington.
            </p>
            <p className="mt-4 text-sm max-w-xs">
              We believe that there&apos;s not much a dance party won’t cure.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 p-6 sm:p-12 flex flex-col justify-center items-start space-y-6">
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
              <div key={item} className="flex items-baseline space-x-3">
                <span className="text-xs">{`0${idx + 1}`}</span>
                <a
                  href="#"
                  className="text-2xl sm:text-3xl lg:text-4xl hover:opacity-70"
                >
                  {item}
                </a>
              </div>
            ))}

            {/* Enquiry button in mobile menu */}
            <button
              onClick={() => {
                setFormOpen(true);
                setMenuOpen(false);
              }}
              className="mt-6 italic underline text-lg"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Inquire
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 sm:top-8 sm:right-10 text-white"
          >
            <X size={28} />
          </button>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default Navbar;
