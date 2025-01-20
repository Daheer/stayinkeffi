/* eslint-disable */
"use client";

import React from "react";
import { Hotel, Search, Building2, ArrowRight } from "lucide-react";
import { Tilt } from "@/components/ui/tilt";
import { TextEffect } from "@/components/ui/text-effect";
import { InView } from "@/components/ui/in-view";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dark:from-zinc-900 dark:to-zinc-800">
        <div className="absolute inset-0 mix-blend-multiply" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/noise.png")',
            backgroundRepeat: "repeat",
            mixBlendMode: "overlay",
          }}
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            <TextEffect per="word" preset="slide">
              Find your perfect stay or connect with more guests!
            </TextEffect>
            {/* Ready to find your perfect stay or connect with more travelers? */}
          </h3>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Tilt rotationFactor={4} isRevese>
              <div className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl transition-all duration-200 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-r-2xl" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <Search className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                    For Travelers
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Discover the best hotels in Keffi with just a few clicks.
                  Explore available rooms, find the perfect stay, and plan your
                  trip with ease!
                </p>

                <div className="relative items-center justify-center inline-flex group">
                  <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-sm group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="/hotels"
                    className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-black bg-white border border-transparent rounded-md"
                    role="button"
                  >
                    Explore Hotels Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </Tilt>
            <Tilt rotationFactor={4} isRevese>
              <div className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl transition-all duration-200 hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-purple-500 to-purple-600 rounded-r-2xl" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Building2 className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                    For Hotel Owners
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Join StayInKeffi and showcase your hotel to hundreds of
                  travelers visiting Keffi. Update your availability, connect
                  directly, and grow your business effortlessly!
                </p>
                <div className="relative items-center justify-center inline-flex group">
                  <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-sm group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="/add-hotel"
                    className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-black bg-white border border-transparent rounded-md"
                    role="button"
                  >
                    List Your Hotel
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </Tilt>
          </div>{" "}
        </InView>
      </div>{" "}
    </section>
  );
};

export default CTASection;
