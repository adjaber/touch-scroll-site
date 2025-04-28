
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-travel-blue" />
            <span className="text-lg font-bold text-gray-900">TraveleSIM</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-travel-blue font-medium">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-travel-blue font-medium">How It Works</a>
            <a href="#destinations" className="text-gray-700 hover:text-travel-blue font-medium">Destinations</a>
            <a href="#benefits" className="text-gray-700 hover:text-travel-blue font-medium">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-travel-blue font-medium">Testimonials</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="btn-primary">Get Your eSIM</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#destinations" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Destinations</a>
            <a href="#benefits" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-travel-blue py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <Button className="btn-primary w-full mt-2" onClick={() => setIsMenuOpen(false)}>Get Your eSIM</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
