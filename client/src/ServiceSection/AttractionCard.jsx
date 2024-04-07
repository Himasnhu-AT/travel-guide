import React from 'react';

const AttractionCard = ({ attraction }) => {
  return (
    <div>
      {/* Display attraction details */}
      <h3>{attraction.name}</h3>
      <p>{attraction.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default AttractionCard;
