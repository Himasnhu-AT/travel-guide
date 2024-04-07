import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-2">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-600 mb-4">Please check the URL or go back to the homepage.</p> 
      </div>
    </div>
  );
};

export default NotFoundPage;
