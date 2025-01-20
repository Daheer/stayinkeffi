/* eslint-disable */
"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 py-4 bg-black backdrop-blur-md sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="/" title="StayInKeffi" className="flex">
                <img
                  className="w-auto h-24"
                  src="/stayinkeffi-logo.png"
                  alt="StayInKeffi Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a
                href="/hotels"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Hotels
              </a>
              <a
                href="/about"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Contact
              </a>
              <a
                href="/support"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Support
              </a>
            </nav>

            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="/add-hotel"
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Add Your Hotel 🏨
              </a>
            </div>
          </div>

          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a
                  href="/hotels"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Hotels
                </a>
                <a
                  href="/about"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Contact
                </a>
                <a
                  href="/support"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Support
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Shared gradients - moved from HeroSection */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <linearGradient
            id="star-gradient"
            x1="3.07813"
            y1="3.8833"
            x2="23.0483"
            y2="6.90161"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient
            id="blur-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.5)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.5)" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Navbar;
