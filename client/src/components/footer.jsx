import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white text-center p-4 mt-8">
      <nav className="mt-4">
        <ul className="flex justify-center">
          <li className="mx-2"><a href="/">Home</a></li>
          <li className="mx-2"><a href="/about">About</a></li>
          <li className="mx-2"><a href="/contact">Contact</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <div className="mt-4">
        <p>Contributors:</p>
        <ul className="flex justify-center">
          <li className="mx-2">Rahul Kumar</li>
          <li className="mx-2">Himanshu</li>
          {/* Add more contributors as needed */}
        </ul>
      </div>
      <p>&copy; {new Date().getFullYear()} Travel Guide. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
