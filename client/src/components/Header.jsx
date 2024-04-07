import React, { useState } from 'react';
import travelGuideLogo from '../../Public/travelGuideLogo.jpeg';

function Header() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  const openServicesDropdown = () => {
    setServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    setServicesDropdownOpen(false);
  };

  const openFeaturesDropdown = () => {
    setFeaturesDropdownOpen(true);
  };

  const closeFeaturesDropdown = () => {
    setFeaturesDropdownOpen(false);
  };

  return (
    <nav className="p-3 h-16">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src={travelGuideLogo} className="h-10 sm:h-10 rounded-full" alt="Travel Guide Logo" /> 
            <span className="text-black text-2xl font-semibold ml-2">Travel Guide</span>
          </a>
        </div>
        <div className="flex items-center mx-4 space-x-8 text-black"> 
          <a href="/" className="hover:text-green-900 hover:border px-2 py-1 font-semibold">Home</a>
          <a href="/about" className="hover:text-green-900  hover:border px-2 py-1 font-semibold" >About</a>
          <div className="relative" onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
            <button className="hover:text-green-900 hover:border px-2 py-1 font-semibold">Services</button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg py-1" onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
                <a href="/services/customized-itineraries" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Customized Itineraries</a>
                <a href="/services/route-suggestions" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Route Suggestions</a>
                <a href="/services/accommodation-recommendations" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Accommodation Recommendations</a>
                <a href="/services/dining-options" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Dining Options</a>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={openFeaturesDropdown} onMouseLeave={closeFeaturesDropdown}>
            <button className="hover:text-green-900 hover:border px-2 py-1 font-semibold">Features</button>
            {featuresDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg py-1" onMouseEnter={openFeaturesDropdown} onMouseLeave={closeFeaturesDropdown}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">DestinationGuides</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">TravelBlog</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">TravelTips</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">UserReviews</a>
              </div>
            )}
          </div>
          <a href="contactfaqs" className="hover:text-green-900 hover:border px-2 py-1 font-semibold">ContactFAQs</a>
          <div className="mr-4"> 
            <button className="bg-green-600 text-white   px-3 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out font-semibold">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
