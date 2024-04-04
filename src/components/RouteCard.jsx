import React from 'react';

const RouteCard = ({ routes } = {}) => {
  return (
    <div className='flex justify-center items-center'>
      <h1>Routes: </h1>
      {/* Display route details */}
      {routes.map((route) => (
        <div key={route.id}>
          <h3>{route.name}</h3>
          <p>{route.description}</p>
        </div>
      ))}
      {/* Add more details as needed */}
    </div>
  );
};

export default RouteCard;
