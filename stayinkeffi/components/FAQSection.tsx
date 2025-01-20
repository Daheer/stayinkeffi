/* eslint-disable */
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { InView } from "@/components/ui/in-view";

const faqs = [
  {
    question: "What is StayInKeffi?",
    answer:
      "StayInKeffi is a platform where you can explore hotels in Keffi, view available rooms, and connect directly with hotel owners or managers.",
  },
  {
    question: "How does StayInKeffi work?",
    answer:
      "Hotels list their availability on our platform, and travelers can search for stays, check availability, and contact hotels directly to make arrangements.",
  },
  {
    question: "Can I book a hotel directly through StayInKeffi?",
    answer:
      "Not yet. For now, you can find contact details for each hotel and reach out to them directly to finalize your booking.",
  },
  {
    question: "How do I list my hotel on StayInKeffi?",
    answer:
      "Contact us through the 'List Your Hotel' button and create an account. Once approved, you'll be able to add your hotel details, update availability, and connect with potential guests.",
  },
  {
    question: "What does it cost to use StayInKeffi?",
    answer:
      "For travelers: It's completely free to explore hotels and connect with them. For hotels: We offer a simple monthly subscription with no additional fees.",
  },
  {
    question: "Are all hotels verified?",
    answer:
      "Yes, we ensure that every listed hotel meets our quality and safety standards before being added to the platform.",
  },
  {
    question: "What if I can't find the hotel I'm looking for?",
    answer:
      "We're continually expanding our listings. You can contact us, and we'll do our best to assist you.",
  },
  {
    question: "How do I update my hotel's availability or details?",
    answer:
      "Once you've signed up, you'll have access to a dashboard where you can manage your listings and update information.",
  },
  {
    question: "Can I remove my hotel from StayInKeffi?",
    answer:
      "Yes, you can request removal at any time by contacting our support team.",
  },
  {
    question: "Who do I contact if I need help?",
    answer:
      "You can reach our support team through the 'Contact Us' page, and we'll assist you as quickly as possible.",
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-zinc-600 dark:text-zinc-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Got questions? We've got answers!
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
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-600 dark:text-zinc-400">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
};

export default FAQSection;
