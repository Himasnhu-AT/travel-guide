import React from 'react';

const UserGuidePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">User Guide</h1>
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Getting Started</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Welcome to Travel Guide! To get started, simply sign up for an account or log in if you already have one. Once logged in, you'll have access to all our features, including personalized itineraries, accommodation recommendations, dining options, and more.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Creating an Itinerary</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Planning your trip is easy with Travel Guide. To create a new itinerary, click on the "New Itinerary" button and enter your destination, travel dates, and preferences. Our platform will generate a customized itinerary for you, including recommended attractions, dining options, and travel routes.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Exploring Destinations</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Discover new destinations and learn about their highlights, attractions, and local culture. Our destination guides provide comprehensive information to help you plan your trip and make the most of your travel experience.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Booking Accommodations</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Find the perfect place to stay with our curated list of accommodations. Browse through hotels, resorts, vacation rentals, and more, and book your accommodation directly through our platform for added convenience.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Enjoying Dining Experiences</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Explore a variety of dining options at your destination, from local eateries serving authentic cuisine to fine dining restaurants offering gourmet meals. Use our dining recommendations to discover new culinary experiences and flavors.
          </p>
        </section>
      </div>
    </div>
  );
}

export default UserGuidePage;
