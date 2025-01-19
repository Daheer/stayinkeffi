import React from "react";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    feedback: "StayInKeffi made my trip so much easier!",
    photo: "/path/to/photo1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Great service and friendly staff. Highly recommend!",
    photo: "/path/to/photo2.jpg",
  },
  {
    name: "Michael Johnson",
    feedback: "A seamless experience from start to finish.",
    photo: "/path/to/photo3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">What Visitors Say About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Avatar src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
