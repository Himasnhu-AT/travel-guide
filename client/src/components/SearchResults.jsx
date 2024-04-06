import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <p>{result.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
