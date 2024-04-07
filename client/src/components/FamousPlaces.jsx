import React from 'react';
import GatewayofIndia from "../../Public/GatewayofIndia.jpeg";
import goldenTemple from '../../Public/goldenTemple.jpeg';
import MysorePalace from '../../Public/MysorePalace.jpeg';
import QutubMinar from '../../Public/QutubMinar.jpeg';
import Tajmahal from '../../Public/Tajmahal.jpg';
import redFort from '../../Public/redFort.jpeg';

const FamousPlaces = () => {
  const famousPlacesData = [
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: Tajmahal,
    },
    {
      name: 'Golden Temple',
      location: 'Amritsar, Punjab',
      image: goldenTemple,
    },
    {
      name: 'Red Fort',
      location: 'Delhi',
      image: redFort,
    },
    {
      name: 'Qutub Minar',
      location: 'Delhi',
      image: QutubMinar,
    },
    {
      name: 'Gateway of India',
      location: 'Mumbai, Maharashtra',
      image: GatewayofIndia,
    },
    {
      name: 'Mysore Palace',
      location: 'Mysore, Karnataka',
      image: MysorePalace,
    },
  ];

  return (
    <div className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Explore Famous Places in India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {famousPlacesData.map((place, index) => (
            <a href="#" key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-gray-900">
                <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.location}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamousPlaces;
