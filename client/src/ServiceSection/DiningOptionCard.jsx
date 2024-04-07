import React from 'react';

const DiningOptionCard = ({ diningOption }) => {
  return (
    <div>
      {/* Display dining option details */}
      <h3>{diningOption.name}</h3>
      <p>{diningOption.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DiningOptionCard;
