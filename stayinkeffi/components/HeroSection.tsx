/* eslint-disable */
"use client";

import React from "react";
import { Tilt } from "@/components/ui/tilt";

const HeroSection = () => {
  return (
    <div className="">
      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="absolute inset-0 bg-[#0D0D0D]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 mix-blend-multiply"></div>
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'url("https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png")',
              backgroundRepeat: "repeat",
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Your Perfect Stay in Keffi Awaits
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Discover and book the best hotels in Keffi. From luxury
                accommodations to budget-friendly options, find your ideal stay
                with real-time availability and instant confirmation.
              </p>

              <form
                action="#"
                method="POST"
                className="relative mt-8 rounded-full sm:mt-12"
              >
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search hotels, rooms, or locations in Keffi..."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                  >
                    Find Hotels
                  </button>
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">
                  Trusted by 1000+ guests
                </p>

                <div className="flex items-center mt-3">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        width="20"
                        height="20"
                        key={index}
                      >
                        <g fill="white">
                          <path d="M50 10 L60 35 H85 L65 50 L75 75 L50 60 L25 75 L35 50 L15 35 H40 Z" />
                        </g>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-base font-normal text-white">
                    4.8/5
                  </span>
                  <span className="ml-1 text-base font-normal text-gray-500">
                    (50+ Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-50"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt=""
                />
              </div>

              <img
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                src="/illustrate-resized.png"
                alt="Hotel Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
