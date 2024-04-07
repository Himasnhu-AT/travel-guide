import React from 'react';

const FamousPlaces = () => {
  const famousPlacesData = [
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'taj_mahal.jpg',
    },
    {
      name: 'Golden Temple',
      location: 'Amritsar, Punjab',
      image: 'golden_temple.jpg',
    },
    {
      name: 'Red Fort',
      location: 'Delhi',
      image: 'red_fort.jpg',
    },
    {
      name: 'Qutub Minar',
      location: 'Delhi',
      image: 'qutub_minar.jpg',
    },
    {
      name: 'Gateway of India',
      location: 'Mumbai, Maharashtra',
      image: 'gateway_of_india.jpg',
    },
    {
      name: 'Mysore Palace',
      location: 'Mysore, Karnataka',
      image: 'mysore_palace.jpg',
    },
  ];

  return (
    <div className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Explore Famous Places in India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {famousPlacesData.map((place, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={`/images/${place.image}`} alt={place.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                <p className="text-sm text-gray-600">{place.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamousPlaces;
