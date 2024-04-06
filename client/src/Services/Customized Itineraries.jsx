import React from 'react';

const CustomizedItineraries = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-6">Customized Itineraries</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Let us plan your journey with personalized itineraries tailored to your preferences and interests.
          Whether you're seeking adventure, relaxation, or cultural experiences, we'll create the perfect itinerary
          for an unforgettable trip.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomizedItineraries;
