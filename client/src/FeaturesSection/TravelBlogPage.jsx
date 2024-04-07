import React, { useRef, useEffect, useState } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const TravelBlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Top 10 Must-Visit Destinations in Asia',
      image: 'https://via.placeholder.com/300',
      description: 'Explore the top destinations in Asia, from the bustling streets of Tokyo to the serene beaches of Bali.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'John Doe',
    },
    {
      id: 2,
      title: 'Adventure Travel: A Thrill-Seeker\'s Guide',
      image: 'https://via.placeholder.com/300',
      description: 'Embark on adrenaline-pumping adventures around the world, from skydiving in New Zealand to trekking the Inca Trail.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Culinary Journeys: Discovering Global Flavors',
      image: 'https://via.placeholder.com/300',
      description: 'Indulge your taste buds with our culinary travel guide, featuring the best street food, local delicacies, and fine dining experiences.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Alice Johnson',
    },
    {
      id: 4,
      title: 'Solo Travel: Embracing Independence',
      image: 'https://via.placeholder.com/300',
      description: 'Gain insights and tips for solo travel adventures, empowering you to explore the world independently.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Robert Brown',
    },
    {
      id: 5,
      title: 'Hidden Gems: Off-the-Beaten-Path Adventures',
      image: 'https://via.placeholder.com/300',
      description: 'Uncover hidden gems and secret treasures in lesser-known destinations, away from the tourist crowds.',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Emily Williams',
    },
    // Add more articles as needed
  ];

  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2; // Adjust the scroll speed here
        if (containerRef.current.scrollLeft >= (containerRef.current.scrollWidth - containerRef.current.clientWidth)) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 50); // Adjust the scroll interval here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Travel Blog</h1>
      <div
        ref={containerRef}
        className="overflow-x-auto whitespace-nowrap"
        style={{ overflow: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
      >
        {/* Map over the articles array to dynamically generate cards */}
        {articles.map((article, index) => (
          <div key={article.id} className="inline-block mr-4">
            <Card
              hoverable
              className="w-64 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-gray-900"
              cover={<img alt={article.title} src={article.image} className="h-40 object-cover" />}
            >
              <Meta title={article.title} description={article.description} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelBlogPage;
