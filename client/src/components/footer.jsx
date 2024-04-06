import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-1 px-4 mt-2">
      <nav className="flex justify-center mb-4">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-900">Home</a></li>
          <li><a href="/about" className="hover:text-gray-900">About</a></li>
          <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
      <div className="flex flex-wrap justify-center items-center mb-4">
        <p className="mr-4 text-xl">Contributors:</p>
        <div className="flex">
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
      <div className="flex justify-center mb-2">
        <a href="https://github.com/travelguide" className="text-white mx-2 hover:text-gray-900" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
        <a href="https://linkedin.com/travelguide" className="text-white mx-2 hover:text-gray-900" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
        <a href="https://facebook.com/travelguide" className="text-white mx-2 hover:text-gray-900" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
        <a href="https://twitter.com/travelguide" className="text-white mx-2 hover:text-gray-900" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
      </div>
      <p className="mt-2 text-center">&copy; {new Date().getFullYear()} Travel Guide. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
