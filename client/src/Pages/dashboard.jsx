import React, { useState, useEffect } from "react";
import SearchLocations from "../components/searchLocations";

const Dashboard = ({ navigateToLogin }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const storedName = localStorage.getItem("name");

    setToken(storedToken);
    setUserId(storedUserId);
    setName(storedName);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 text-white">
      <header className="bg-transparent py-4 px-8 text-center">
        <div>
          <h1 className="mt-2 mb-1 text-5xl font-bold text-white shadow-2xl">Welcome to Travel Guide</h1>
          <p className="text-2xl mt-3 mb-5">
            Your Ultimate Companion for Adventure
          </p>
          {name && (
            <p className="text-lg mt-2">Welcome back, {name}!</p>
          )}
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Discover Your Next Adventure</h2>
          <p className="text-lg mb-4">
            Whether it's discovering hidden gems or embracing adventures,
            Travel Guide is here to turn your dreams into reality.
          </p>
          <p className="text-lg">
            Let's embark on an unforgettable journey together!
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-black">Personalized Recommendations</h3>
            <p className="text-lg mb-4 text-black">
              Explore accommodations, dining options, attractions, and travel routes
              tailored to your unique preferences and requirements.
            </p>
            <p className="text-lg text-black">
              Say goodbye to the hassle of researching multiple sources – our all-in-one solution
              provides everything you need for an unforgettable travel experience.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-black">
            <h3 className="text-xl font-semibold mb-4">Start Planning Now</h3>
            <p className="text-lg mb-4">
              Dive into our comprehensive database and start planning your next journey today.
              Whether you're a seasoned explorer or a first-time adventurer, Travel Guide has
              something for everyone.
            </p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
              onClick={navigateToLogin}
            >
              Begin Your Adventure
            </button>
            <p className="text-sm mt-2">Explore Best Food, accommodations, Budget friendly, Best Travel and activities to create your dream travel itinerary.</p>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Recent Searches</h2>
        </section>
        
        <SearchLocations searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          
      </main>
    </div>
  );
};

export default Dashboard;
