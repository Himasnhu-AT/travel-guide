import React, { useState } from 'react';

const DestinationInput = ({ onSearch }) => {
  const [destination, setDestination] = useState('');

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(destination);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter destination..."
        value={destination}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default DestinationInput;
