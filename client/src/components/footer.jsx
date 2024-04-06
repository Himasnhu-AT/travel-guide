import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-8">
      <nav className="flex justify-center mb-4">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/about" className="hover:text-gray-200">About</a></li>
          <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
          
        </ul>
      </nav>
      <div className="flex justify-center">
        <p className="mr-4">Contributors:</p>
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
      <p className="mt-4 text-center">&copy; {new Date().getFullYear()} Travel Guide. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
