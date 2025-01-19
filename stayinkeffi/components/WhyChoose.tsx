import React from "react";
import { CheckCircle, Star } from "lucide-react";

const keyPoints = [
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Verified Hotels",
    description: "All hotels listed are verified for quality and service.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Easy Booking",
    description: "Book your stay in just a few clicks.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Best Prices",
    description: "We offer the best prices for hotels in Keffi.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "24/7 Support",
    description: "Our support team is available 24/7 to assist you.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Why Choose StayInKeffi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              {point.icon}
              <div>
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
