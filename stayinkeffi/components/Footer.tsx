import React from "react";
// import { Icons } from "@/components/ui/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            {/* <Icons.facebook /> */}
          </a>
          <a href="#" className="hover:text-gray-400">
            {/* <Icons.twitter /> */}
          </a>
          <a href="#" className="hover:text-gray-400">
            {/* <Icons.instagram /> */}
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        © {new Date().getFullYear()} StayInKeffi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
