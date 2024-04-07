import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import travelGuideLogo from '../../Public/travelGuideLogo.png';

function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-8 mt-2 flex justify-between items-center">
      <div className="flex space-x-4 items-center">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/about" className="hover:text-gray-200">About</a></li>
          <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
        <div className="flex items-center">
          <p className="mr-4 text-xl">Contributors:</p>
          <div className="flex flex-wrap">
            <span className="mx-2 mb-2">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Rahul Kumar</a>
            </span>
            <span className="mx-2 mb-2">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Himanshu</a>
            </span>
            <span className="mx-2 mb-2">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Bhargav Naidu</a>
            </span>
            <span className="mx-2 mb-2">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Ridhi Sambhor</a>
            </span>
            <span className="mx-2 mb-2">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Priyam</a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {/* Travel logo */}
        <img src={travelGuideLogo} alt="Travel Guide" className="h-8 w-auto mr-4" />
        
        {/* Social media links */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/travelguide" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
          <a href="https://linkedin.com/travelguide" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://facebook.com/travelguide" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
          <a href="https://twitter.com/travelguide" className="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
        </div>
      </div>
      <p className="text-white">&copy; {new Date().getFullYear()} Travel Guide. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
