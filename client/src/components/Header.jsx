import React, { useState, useEffect } from "react";
import travelGuideLogo from "../../Public/travelGuideLogo.jpeg";
import Dashboard from "../Pages/dashboard";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("token") !== null;
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/home"; 
  };

  return (
    <nav className="relative p-3 h-16">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={travelGuideLogo}
              className="h-10 sm:h-10 rounded-full"
              alt="Travel Guide Logo"
            />
            <span className="text-black text-2xl font-semibold ml-2">
              Travel Guide
            </span>
          </a>
        </div>
        <div className="flex items-center mx-4 space-x-8 text-black">
          <a
            href="/"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Home
          </a>
          <a
            href="/dashboard"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Dashboard
          </a>

          <a
            href="/services"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Services
          </a>

          <a
            href="support"
            className="hover:text-green-900 hover:border hover:border-black px-2 py-1 font-semibold"
          >
            Contact
          </a>
          <a
            href="/login"
            className="hover:bg-green-700 border hover:border hover:border-black px-2 py-1 hover:text-white font-semibold rounded-md"
          >
            Login
          </a>
          <a
            href="/signup"
            className="hover:bg-blue-500 bg-green-700 text-white hover:border hover:border-black px-2 py-1 font-semibold rounded"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
