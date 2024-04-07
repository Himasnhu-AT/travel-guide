import React, { useRef, useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const UserReviewsPage = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 2; // Adjust the scroll speed here
        setScrollPosition(containerRef.current.scrollLeft);
      }
    }, 50); // Adjust the scroll interval here

    return () => clearInterval(interval);
  }, []);

  const handleScrollEnd = () => {
    if (containerRef.current) {
      if (scrollPosition + containerRef.current.offsetWidth >= containerRef.current.scrollWidth) {
        containerRef.current.scrollLeft = 0;
        setScrollPosition(0);
      }
    }
  };

  const userReviewCategories = [
    {
      id: 1,
      name: 'Accommodations',
      description: 'Allow users to leave reviews and ratings for accommodations they have stayed at, including feedback on cleanliness, comfort, location, and service.',
      imageSrc: 'https://via.placeholder.com/300',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'John Doe',
    },
    {
      id: 2,
      name: 'Dining Options',
      description: 'Enable users to share their dining experiences and rate restaurants based on food quality, ambiance, service, and value for money.',
      imageSrc: 'https://via.placeholder.com/300',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Jane Smith',
    },
    {
      id: 3,
      name: 'Attractions',
      description: 'Provide reviews and ratings for tourist attractions, landmarks, and points of interest, helping users plan their itinerary and explore new destinations.',
      imageSrc: 'https://via.placeholder.com/300',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Alice Johnson',
    },
    {
      id: 4,
      name: 'Transportation',
      description: 'Share reviews and ratings for transportation options such as airlines, trains, buses, and car rental services, assisting users in making informed travel decisions.',
      imageSrc: 'https://via.placeholder.com/300',
      userPhoto: 'https://via.placeholder.com/50',
      userName: 'Robert Brown',
    },
    // Add more user review categories with userPhoto and userName
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Reviews and Ratings</h1>
      <div
        className="overflow-x-auto whitespace-nowrap flex"
        style={{ overflow: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        ref={containerRef}
        onScroll={handleScrollEnd}
      >
        {userReviewCategories.map(category => (
          <div key={category.id} className="inline-block mr-4">
            <Card
              hoverable
              className="w-64 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-gray-900"
              cover={<img alt={category.name} src={category.imageSrc} className="h-40 object-cover" />}
            >
              <Meta
                title={category.name}
                description={category.description}
                avatar={<img src={category.userPhoto} alt={category.userName} className="rounded-full w-6 h-6 mr-2" />}
              />
              <div className="mt-2 text-sm text-gray-600">Reviewed by: {category.userName}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserReviewsPage;
