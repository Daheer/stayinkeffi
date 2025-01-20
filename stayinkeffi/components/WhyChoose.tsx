"use client";

import React, { useState } from "react";
import {
  CalendarClock,
  MessageSquare,
  Shield,
  Search,
  Eye,
  Phone,
  Wallet,
  LineChart,
} from "lucide-react";
import { InView } from "@/components/ui/in-view";

const benefits = {
  travelers: [
    {
      icon: <CalendarClock className="w-6 h-6" />,
      title: "Real-Time Availability",
      description:
        "Access up-to-date room availability from verified hotels in Keffi.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Direct Communication",
      description:
        "Easily contact hotel owners or managers directly via phone, WhatsApp, or email.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Curated Stays",
      description: "Only trusted and verified hotels with quality amenities.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "User-Friendly Experience",
      description:
        "Quickly find what you need with an intuitive search and filter system.",
    },
  ],
  hotels: [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Increased Visibility",
      description:
        "Showcase your hotel to hundreds of potential visitors coming to Keffi.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Direct Leads",
      description:
        "Receive direct inquiries from travelers without middlemen or commissions.",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Affordable Advertising",
      description:
        "Join our platform with a simple monthly subscription, no hidden fees.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Tailored Solutions",
      description:
        "Gain insights about what travelers are looking for in Keffi.",
    },
  ],
};

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState<"travelers" | "hotels">(
    "travelers"
  );

  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Why Choose StayInKeffi?
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-400">
            Whether you're a traveler looking for the perfect stay or a hotel
            owner seeking more visibility, StayInKeffi is here to help.
          </p>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Mobile Tabs */}
          <div className="md:hidden flex space-x-2 mb-8">
            {["travelers", "hotels"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "travelers" | "hotels")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors
                ${
                  activeTab === tab
                    ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Desktop Two-Column Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
                For Travelers
              </h3>
              {benefits.travelers.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    {React.cloneElement(benefit.icon, {
                      className: "w-6 h-6 text-cyan-500",
                    })}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {benefit.title}
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
                For Hotels
              </h3>
              {benefits.hotels.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    {React.cloneElement(benefit.icon, {
                      className: "w-6 h-6 text-purple-500",
                    })}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {benefit.title}
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden space-y-8">
            {benefits[activeTab].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  {React.cloneElement(benefit.icon, {
                    className: `w-6 h-6 ${
                      activeTab === "travelers"
                        ? "text-cyan-500"
                        : "text-purple-500"
                    }`,
                  })}
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {benefit.title}
                  </h4>
                  <p className="text-zinc-700 dark:text-zinc-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
};

export default WhyChoose;
