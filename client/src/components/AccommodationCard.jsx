import React from 'react';

const AccommodationCard = ({ accommodation }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4">
      {/* Display accommodation details */}
      <h3 className="text-xl font-semibold mb-2">{accommodation.name}</h3>
      <p className="text-gray-600">{accommodation.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

// Sample accommodation data
const accommodationData = {
  name: "Luxury Resort",
  description: "Experience luxury like never before with breathtaking views and world-class amenities."
};

export default () => <AccommodationCard accommodation={accommodationData} />;
