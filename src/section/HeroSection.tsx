"use client";

import { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-[50vh] sm:h-[40vh] md:h-[70vh] lg:h-[90vh] w-full overflow-hidden">
      {/* ✅ Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/Video 1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight"
          style={{ fontFamily: "var(--font-third)" }}
        >
          Wedding & Event Planner <br /> Jim Corbett & Delhi
        </h2>
        <p
          className="uppercase tracking-widest text-xs sm:text-sm md:text-base max-w-2xl"
          style={{ fontFamily: "var(--font-primary)" }}
        >
          Specializing in private estate, outdoor, and editorial-style weddings
          across the India
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
