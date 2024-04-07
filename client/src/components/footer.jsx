import React from 'react';
import travelGuideLogo from '../../Public/travelGuideLogo.jpeg';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <img src={travelGuideLogo} alt="Travel Guide Logo" className="w-40 h-auto rounded-full shadow-lg mt-4" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-4 ">Importance Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">About</a>
                <li>
                <a href="#" className="hover:text-gray-300">Contact</a>
              </li>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-4">Contributor</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">Rahul Kumar</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Himanshu</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Priyam</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Bhargav Naidu</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Ridhi Sambhor</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex justify-between items-center">
          <div className="text-sm ml-4">&copy; TravelGuide 2022</div>
          <div className="flex space-x-4 mb-2">
            <a href="#" className="text-2xl hover:text-gray-300"><BsFacebook /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsInstagram /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsTwitter /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsGithub /></a>
            <a href="#" className="text-2xl hover:text-gray-300"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
