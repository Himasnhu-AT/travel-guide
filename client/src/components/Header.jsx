import React from 'react';
import travelGuideLogo from '../Public/travelGuideLogo.jpeg'; 
import FAQ from '../features/FAQsPage';

function Header() {
  return (
    <nav className="bg-blue-900 p-3">
      <div className=" mx-auto flex justify-between items-center">
       
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src={travelGuideLogo} className="h-10 sm:h-10 rounded-full" alt="Travel Guide Logo" /> 
            <span className="text-white text-2xl font-semibold ml-2">Travel Guide</span>
          </a>
        </div>
      
        <div className="flex items-center mx-4 space-x-8"> 
          <ul className="flex space-x-8 text-white">
            <li><a href="#" className="hover:text-red-200">Home</a></li>
            <li><a href="#" className="hover:text-red-200">About</a></li>
            <li><a href="#" className="hover:text-red-200">Services</a></li>
            <li><a href="#" className="hover:text-red-200">Pricing</a></li>
            <li><a href="#" className="hover:text-red-200">Contact</a></li>
            <li><a href={FAQ} className="hover:text-red-200">FAQs</a></li>
          </ul>
          <div className="mr-4"> 
            <button className="bg-white text-blue-900 px-3 py-1 rounded-md hover:bg-green-900 hover:text-white transition duration-300 ease-in-out">Get started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
