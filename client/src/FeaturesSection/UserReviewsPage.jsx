import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const UserReviewsPage = () => {
 
  const userReviewCategories = [
    {
      id: 1,
      name: 'Accommodations',
      description: 'Allow users to leave reviews and ratings for accommodations they have stayed at, including feedback on cleanliness, comfort, location, and service.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Dining Options',
      description: 'Enable users to share their dining experiences and rate restaurants based on food quality, ambiance, service, and value for money.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Attractions',
      description: 'Provide reviews and ratings for tourist attractions, landmarks, and points of interest, helping users plan their itinerary and explore new destinations.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Transportation',
      description: 'Share reviews and ratings for transportation options such as airlines, trains, buses, and car rental services, assisting users in making informed travel decisions.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      name: 'Local Cuisine',
      description: 'Review and rate local cuisine and street food, sharing your favorite dishes and culinary experiences with fellow travelers.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      name: 'Entertainment',
      description: 'Rate entertainment venues such as theaters, cinemas, concert halls, and nightlife spots, helping others discover the best entertainment options in town.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 7,
      name: 'Shopping',
      description: 'Share reviews and ratings for shopping destinations including malls, markets, boutiques, and souvenir shops, guiding fellow travelers in finding unique and memorable souvenirs.',
      imageSrc: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      name: 'Outdoor Activities',
      description: 'Review outdoor activities such as hiking trails, parks, beaches, and adventure sports facilities, helping others find exciting outdoor experiences and scenic spots to explore.',
      imageSrc: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Reviews and Ratings</h1>
      <Row gutter={[16, 16]}>
        {/* Map over the userReviewCategories array to render each category dynamically */}
        {userReviewCategories.map(category => (
          <Col key={category.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className="w-full"
              cover={<img alt={category.name} src={category.imageSrc} className="h-64 object-cover" />}
            >
              <Meta title={category.name} description={category.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default UserReviewsPage;
