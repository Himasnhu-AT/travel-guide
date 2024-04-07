import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const DestinationGuidesPage = () => {
  // Array of objects containing information about each destination
  const destinations = [
    {
      id: 1,
      name: 'Destination 1',
      image: 'https://via.placeholder.com/300',
      description: 'Include detailed information about Destination 1, such as its history, culture, landmarks, and local customs.',
    },
    {
      id: 2,
      name: 'Destination 2',
      image: 'https://via.placeholder.com/300',
      description: 'Include detailed information about Destination 2, such as its history, culture, landmarks, and local customs.',
    },
    {
      id: 3,
      name: 'Destination 3',
      image: 'https://via.placeholder.com/300',
      description: 'Include detailed information about Destination 3, such as its history, culture, landmarks, and local customs.',
    },
    {
      id: 4,
      name: 'Destination 4',
      image: 'https://via.placeholder.com/300',
      description: 'Include detailed information about Destination 4, such as its history, culture, landmarks, and local customs.',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Destination Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Map over the destinations array to dynamically generate cards */}
        {destinations.map(destination => (
          <Card
            key={destination.id}
            hoverable
            className="w-full"
            cover={<img alt={destination.name} src={destination.image} />}
          >
            <Meta title={destination.name} description={destination.description} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DestinationGuidesPage;
