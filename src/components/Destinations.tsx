
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Destinations = () => {
  const destinations = [
    {
      name: "Europe",
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 40,
      startingPrice: 14.99
    },
    {
      name: "Asia",
      image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 35,
      startingPrice: 12.99
    },
    {
      name: "North America",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 3,
      startingPrice: 9.99
    },
    {
      name: "South America",
      image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      countries: 12,
      startingPrice: 15.99
    }
  ];

  return (
    <section id="destinations" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-lg">
            Explore our wide coverage across continents
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden card-hover border-none">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-1">{destination.countries} countries</p>
                <p className="text-travel-blue font-bold mb-3">From ${destination.startingPrice}</p>
                <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">Explore Plans</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
