
import React from 'react';
import { Globe, Wifi, CreditCard, Clock, ShieldCheck, Zap } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      icon: <Globe className="h-6 w-6 text-travel-blue" />,
      title: "Global Coverage",
      description: "Connect in over 190+ countries with reliable network partners"
    },
    {
      icon: <Wifi className="h-6 w-6 text-travel-orange" />,
      title: "Instant Connectivity",
      description: "No need to find local SIM cards or deal with language barriers"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-travel-purple" />,
      title: "Cost-Effective",
      description: "Avoid expensive roaming charges with our affordable data plans"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-travel-teal" />,
      title: "Secure Connection",
      description: "Enhanced security compared to public WiFi networks"
    },
    {
      icon: <Clock className="h-6 w-6 text-travel-blue" />,
      title: "Flexible Plans",
      description: "Choose from daily, weekly, or monthly plans to suit your trip"
    },
    {
      icon: <Zap className="h-6 w-6 text-travel-orange" />,
      title: "Fast Speeds",
      description: "High-speed data on 4G/LTE and 5G networks where available"
    }
  ];

  return (
    <section id="benefits" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TraveleSIM</h2>
          <p className="text-gray-600 text-lg">
            Experience the ultimate travel connectivity solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="flex items-start">
                <div className="p-2 bg-gray-100 rounded-full mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
