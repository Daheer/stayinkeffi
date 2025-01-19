import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const hotels = [
  {
    id: 1,
    name: "Hotel A",
    price: "$100/night",
    rating: "4.5",
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Hotel B",
    price: "$120/night",
    rating: "4.7",
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Hotel C",
    price: "$90/night",
    rating: "4.3",
    image: "/path/to/image3.jpg",
  },
];

const FeaturedHotels = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Popular Hotels in Keffi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id}>
              <CardHeader>
                <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded-t-md" />
              </CardHeader>
              <CardContent>
                <CardTitle>{hotel.name}</CardTitle>
                <p>{hotel.price}</p>
                <p>{hotel.rating} stars</p>
              </CardContent>
              <CardFooter>
                <Button variant="default">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
