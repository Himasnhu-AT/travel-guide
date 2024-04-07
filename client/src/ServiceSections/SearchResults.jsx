import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Alert } from 'antd'; // Assuming you're using Ant Design for UI components
import SearchResults from './SearchResults'; // Assuming you have a SearchResults component

const SearchPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch search results based on the query
  const fetchSearchResults = async () => {
    // Example API call to fetch search results based on the query
    // Replace this with your actual API call
    setLoading(true); // Set loading state to true before fetching data
    try {
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setResults(data.results); // Assuming the API response contains an array of search results
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError(error.message); // Set error message in case of an error
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 flex justify-center items-center">Search Results for "{query}"</h1>
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Spin size="large" />
        </div>
      ) : error ? (
        <Alert message={error} type="error" />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default SearchPage;
