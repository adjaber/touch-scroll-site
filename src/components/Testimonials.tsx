
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "United States",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "TraveleSIM made my Europe trip so much easier. I never had to worry about finding WiFi or buying local SIMs. The setup was incredibly simple, and the data speed was excellent throughout my journey."
  },
  {
    name: "Michael Chen",
    location: "Australia",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "As a digital nomad, staying connected is essential for my work. TraveleSIM has been a game-changer for me, allowing me to seamlessly transition between countries without ever losing connectivity."
  },
  {
    name: "Elena Rodriguez",
    location: "Spain",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "I was skeptical about eSIMs at first, but TraveleSIM converted me! The customer service was exceptional when I needed help, and the coverage was perfect during my Southeast Asia adventure."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 text-lg">
            Join thousands of happy travelers who stay connected with our eSIMs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.content}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" className="mr-1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-travel-blue/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Seamless Global Connectivity?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of travelers who enjoy hassle-free internet access worldwide with TraveleSIM's eSIM technology.
          </p>
          <button className="btn-primary">Get Your eSIM Today</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
