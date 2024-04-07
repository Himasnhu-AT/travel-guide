import React from 'react';
import AccommodationCard from './AccommodationCard'; // Assuming the file path

const MyComponent = () => {
  // Sample accommodation data
  const accommodationData = {
    name: "Luxury Resort",
    description: "Experience luxury like never before with breathtaking views and world-class amenities.",
    rating: 4.5,
    location: "Beachfront Paradise",
    image: "https://via.placeholder.com/150",
  };

  return (
    <div>
      {/* Render the AccommodationCard component with dynamic data */}
      <AccommodationCard accommodation={accommodationData} />
    </div>
  );
};

export default MyComponent;
