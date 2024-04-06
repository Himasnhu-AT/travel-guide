import React from 'react';
import travelGuideLogo from './travelGuideLogo.jpeg'; // Import your logo image

function Header() {
  return (
    <nav className="bg-blue-900 p-3 mt-4 rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: logo, brand name */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src={travelGuideLogo} className="h-10 sm:h-12 rounded-full" alt="Travel Guide Logo" /> {/* Use the imported logo */}
            <span className="text-white text-2xl font-semibold mx-3">Travel Guide</span>
          </a>
        </div>
        {/* Right side: Get started button */}
        <div className="flex items-center mx-4 space-x-8"> {/* Add mx-4 for margin on x-axis */}
          <ul className="flex space-x-8 text-white">
            <li><a href="#" className="hover:text-red-200">Home</a></li>
            <li><a href="#" className="hover:text-red-200">About</a></li>
            <li><a href="#" className="hover:text-red-200">Services</a></li>
            <li><a href="#" className="hover:text-red-200">Pricing</a></li>
            <li><a href="#" className="hover:text-red-200">Contact Us</a></li>
          </ul>
          <div className="mr-4"> {/* Add mr-4 for margin on x-axis */}
            <button className="bg-white text-blue-900 px-3 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out">Get started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
