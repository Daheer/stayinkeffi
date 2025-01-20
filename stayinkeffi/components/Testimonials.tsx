import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { InView } from "@/components/ui/in-view";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "StayInKeffi made my trip so much easier! I quickly found a great hotel and had all the information I needed to contact them. Highly recommended for anyone visiting Keffi.",
      name: "Aisha Bello",
      designation: "Frequent Traveler",
      src: "https://picsum.photos/seed/aisha/640/640",
    },
    {
      quote:
        "As a hotel manager, I’ve seen a significant increase in guests since joining StayInKeffi. The platform is easy to use, and the support team is fantastic!",
      name: "John Okoye",
      designation: "Manager at Grand View Hotel",
      src: "https://picsum.photos/seed/john/640/640",
    },
    {
      quote:
        "This platform is a game-changer for Keffi! It’s simple to navigate, and I love how I can explore different hotels and get in touch with them directly.",
      name: "Fatima Yusuf",
      designation: "Business Consultant",
      src: "https://picsum.photos/seed/fatima/640/640",
    },
    {
      quote:
        "StayInKeffi has streamlined our marketing efforts. We now reach more travelers and fill rooms that would have otherwise stayed empty. A must-have for any hotel in Keffi!",
      name: "Ahmed Musa",
      designation: "Owner at Royal Palm Suites",
      src: "https://picsum.photos/seed/ahmed/640/640",
    },
    {
      quote:
        "I struggled to find hotels in Keffi before discovering StayInKeffi. Now, it’s my go-to platform whenever I visit. Super convenient and reliable!",
      name: "Grace Uche",
      designation: "NGO Coordinator",
      src: "https://picsum.photos/seed/grace/640/640",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          People are saying great things about their StayInKeffi!
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
        <AnimatedTestimonials testimonials={testimonials} />
      </InView>
    </div>
  );
}
