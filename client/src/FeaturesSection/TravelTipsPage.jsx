import React from 'react';

const TravelTipsPage = () => {
  // Array of objects containing travel tips
  const travelTips = [
    {
      id: 1,
      title: 'Packing Tips',
      description: 'Pack versatile clothing and consider the weather at your destination.',
    },
    {
      id: 2,
      title: 'Research Local Customs',
      description: 'Learn about the local customs and traditions to respect the culture.',
    },
    {
      id: 3,
      title: 'Safety First',
      description: 'Keep your belongings secure and be cautious of your surroundings.',
    },
    {
      id: 4,
      title: 'Stay Hydrated',
      description: 'Drink plenty of water to stay hydrated, especially during long flights or hot weather.',
    },
    {
      id: 5,
      title: 'Travel Insurance',
      description: 'Consider purchasing travel insurance to protect yourself from unexpected events.',
    },
    {
      id: 6,
      title: 'Learn Basic Phrases',
      description: 'Learn basic phrases in the local language to communicate with locals and show respect.',
    },
    {
      id: 7,
      title: 'Carry Cash',
      description: 'Always carry some cash for emergencies and places that may not accept cards.',
    },
    {
      id: 8,
      title: 'Stay Flexible',
      description: 'Be flexible with your plans and embrace unexpected changes or delays.',
    },
    {
      id: 9,
      title: 'Pack Light',
      description: 'Avoid overpacking by packing only essentials and versatile clothing items.',
    },
    {
      id: 10,
      title: 'Stay Open-Minded',
      description: 'Be open to new experiences and embrace the local culture and customs.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Travel Tips and Advice</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Map over the travelTips array to render each tip dynamically */}
        {travelTips.map(tip => (
          <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelTipsPage;
