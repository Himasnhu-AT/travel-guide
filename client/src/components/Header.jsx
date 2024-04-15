import React from 'react';
import travelGuideLogo from '../../Public/travelGuideLogo.jpeg';

function Header() {
  return (
    <nav className=" relative p-3 h-16">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/home" className="flex items-center">
            <img src={travelGuideLogo} className="h-10 sm:h-10 rounded-full" alt="Travel Guide Logo" /> 
            <span className="text-black text-2xl font-semibold ml-2">Travel Guide</span>
          </a>
        </div>
        <div className="flex items-center mx-4 space-x-8 text-black"> 
          <a href="/" className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold">Home</a>
          <a href="/about" className="hover:text-green-900  hover:border hover:border-black px-2 py-1 font-semibold" >About</a>
          <a href="/services" className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold">Services</a>

          <a href="support" className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold">Contact</a>
          <a href="/login" className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold">Login</a>

          <div className="mr-4"> 
          < a href="/signup">
            <button className="bg-green-600 text-white   px-3 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out font-semibold ">GetStarted</button>
            </a></div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
