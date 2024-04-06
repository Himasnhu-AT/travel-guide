// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white text-center p-4 mt-8">
      <nav className="mt-4">
        <ul className="flex justify-center">
          <li className="mx-2"><a href="/" className="hover:text-gray-200">Home</a></li>
          <li className="mx-2"><a href="/about" className="hover:text-gray-200">About</a></li>
          <li className="mx-2"><a href="/contact" className="hover:text-gray-200">Contact</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <div className="mt-4">
        <p>Contributors:</p>
        <ul className="flex justify-center">
          <li className="mx-2">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">@RahulKumar</a>
          </li>
          <li className="mx-2">
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">@Himanshu</a>
          </li>
          {/* Add more contributors with social media handles as needed */}
        </ul>
      </div>
      <p>&copy; {new Date().getFullYear()} Travel Guide. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
