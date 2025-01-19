import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">StayInKeffi</div>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#search" className="text-gray-700 hover:text-gray-900">
            Search
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </a>
        </div>
        <Button variant="default" size="sm">
          Login/Sign Up
        </Button>
      </div>
    </nav>
  );
}
