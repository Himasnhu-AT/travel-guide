import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <div key={result.id}>
          {/* Display search result information */}
          <p>{result.name}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
