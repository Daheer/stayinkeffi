import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HeroSection() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Search clicked");
  };

  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay in Keffi</h1>
        <p className="text-xl mb-8">Real-time room availability from trusted hotels in Keffi.</p>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
          <Input
            type="date"
            placeholder="Check-in Date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Check-out Date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Number of Guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            min={1}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </section>
  );
}
