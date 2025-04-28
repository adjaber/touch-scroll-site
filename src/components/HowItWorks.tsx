
import React from 'react';
import { Globe, Smartphone, Zap, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Globe className="h-10 w-10 text-travel-blue" />,
      title: "Choose Your Destination",
      description: "Select from over 190+ countries where our eSIM service is available"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-travel-orange" />,
      title: "Purchase & Install",
      description: "Buy your eSIM and scan the QR code with your compatible device"
    },
    {
      icon: <Zap className="h-10 w-10 text-travel-purple" />,
      title: "Activate When Ready",
      description: "Activate your eSIM immediately or when you arrive at your destination"
    },
    {
      icon: <Map className="h-10 w-10 text-travel-teal" />,
      title: "Stay Connected",
      description: "Enjoy seamless connectivity throughout your journey"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How TraveleSIM Works</h2>
          <p className="text-gray-600 text-lg">
            Get connected in minutes with our simple 4-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="card-hover border-none">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-gray-100 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-bold">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
