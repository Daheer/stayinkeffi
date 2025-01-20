/* eslint-disable */
"use client";

import React from "react";
import { Tilt } from "@/components/ui/tilt";
import { InView } from "@/components/ui/in-view";

const hotels = [
  {
    id: 1,
    name: "Sky Age Hotel",
    description: "Luxury Hotel in Keffi",
    image: "https://picsum.photos/seed/royal_palm/640/640",
  },
  {
    id: 2,
    name: "Al-Vari Hotel",
    description: "Business & Leisure",
    image: "https://picsum.photos/seed/keffi_grand/640/640",
  },
  {
    id: 3,
    name: "Sawalino Hotel",
    description: "Peaceful Gateway",
    image: "https://picsum.photos/seed/green_resort/640/640",
  },
  {
    id: 4,
    name: "New Keffi Hotel",
    description: "Budget-friendly Hotel in Keffi",
    image: "https://picsum.photos/seed/keffi_hotel/640/640",
  },
];

const FeaturedHotels = () => {
  return (
    <div className="py-12 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-zinc-900 dark:text-zinc-50">
          Featured Hotels
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <InView
              key={hotel.id}
              variants={{
                hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Tilt rotationFactor={8} isRevese>
                <div className="flex max-w-[370px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 rounded-xl">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-mono text-lg leading-snug text-zinc-950 dark:text-zinc-50">
                      {hotel.name}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      {hotel.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="relative flex items-center justify-center group">
                        <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-sm group-hover:shadow-cyan-500/50"></div>
                        <a
                          href="/add-hotel"
                          className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-black bg-white dark:bg-zinc-900 dark:text-white border border-transparent rounded-md"
                          role="button"
                        >
                          View Details
                        </a>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-zinc-700 dark:text-zinc-400">
                          4.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </InView>
          ))}

          {/* See All Card */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
          >
            <Tilt rotationFactor={8} isRevese>
              <div className="flex max-w-[370px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 rounded-xl h-full">
                <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-zinc-900 dark:text-zinc-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                  <h3 className="font-mono text-lg leading-snug text-zinc-950 dark:text-zinc-50">
                    Explore More
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-400 text-center">
                    Discover all available hotels in Keffi
                  </p>
                  <div className="relative flex items-center justify-center group">
                    <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-sm group-hover:shadow-cyan-500/50"></div>
                    <a
                      href="/hotels"
                      className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-black bg-white dark:bg-zinc-900 dark:text-white border border-transparent rounded-md"
                      role="button"
                    >
                      Explore Hotels Now
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </InView>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
