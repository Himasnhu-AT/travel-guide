import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About Travel Guide</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Welcome to Travel Guide, your ultimate companion for planning the perfect trip! Whether you're a seasoned traveler or embarking on your first adventure, our platform is designed to provide you with personalized recommendations and essential information to make your journey unforgettable.
        </p>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          At Travel Guide, our mission is to simplify the travel planning process and empower travelers to explore the world with confidence. We understand that every traveler is unique, which is why we offer customizable itineraries, comprehensive destination guides, and expert recommendations tailored to your preferences and interests.
        </p>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          With Travel Guide, you can say goodbye to the hassle of researching multiple sources for travel information. Our all-in-one platform provides everything you need to plan your trip, from accommodation recommendations and dining options to attraction highlights and route suggestions. Whether you're seeking adventure, relaxation, or cultural immersion, we've got you covered.
        </p>
        
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get Started</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Ready to embark on your next adventure? Simply input your destination into our user-friendly interface and let Travel Guide do the rest. Whether you're planning a weekend getaway or a month-long excursion, we're here to help you create unforgettable memories and discover new horizons. Happy travels!
        </p>
        <h2 className="text-2xl font-semibold text-blue-900 mt-5 mb-4"> Our Contributors:</h2>
        <ul className="text-lg text-gray-800 leading-relaxed mb-6">
          <li className="flex items-center">
            <strong>Rahul Kumar:</strong> 
            <div className="ml-2 flex">
              <span className="mr-2">
                <a href="https://twitter.com/rahulkumar" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
              </span>
              <span>
                <a href="https://twitter.com/rahulkumar" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
              </span>
            </div>
          </li>
          <li className="flex items-center">
            <strong>Himanshu:</strong> 
            <div className="ml-2 flex">
              <span className="mr-2">
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
              </span>
              <span>
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
              </span>
            </div>
          </li>
          <li className="flex items-center">
            <strong>Bhargav Naidu:</strong> 
            <div className="ml-2 flex">
              <span className="mr-2">
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
              </span>
              <span>
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
              </span>
            </div>
          </li><li className="flex items-center">
            <strong>Ridhi Sambhor:</strong> 
            <div className="ml-2 flex">
              <span className="mr-2">
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
              </span>
              <span>
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
              </span>
            </div>
          </li><li className="flex items-center">
            <strong>Priyam:</strong> 
            <div className="ml-2 flex">
              <span className="mr-2">
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaGithub /></a>
              </span>
              <span>
                <a href="https://twitter.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
              </span>
            </div>
          </li>
          {/* Add more contributors as needed */}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
