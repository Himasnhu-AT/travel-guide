import React from "react";

const RouteCard = ({ routes } = {}) => {
  return (
    <div className="flex justify-center items-center">
      <h1>Routes: </h1>

      {routes.map((route) => (
        <div key={route.id}>
          <h3>{route.name}</h3>
          <p>{route.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RouteCard;
