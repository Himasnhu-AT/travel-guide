import React from 'react';

const RouteCard = ({ route }) => {
  return (
    <div>
      {/* Display route details */}
      <h3>{route.name}</h3>
      <p>{route.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RouteCard;
