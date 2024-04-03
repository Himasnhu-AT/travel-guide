import React from 'react';

const AccommodationCard = ({ accommodation }) => {
  return (
    <div>
      {/* Display accommodation details */}
      <h3>{accommodation.name}</h3>
      <p>{accommodation.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default AccommodationCard;
