import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const UserReviewsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Reviews and Ratings</h1>
      <Row gutter={[16, 16]}>
        {/* Accommodations */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Accommodations" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Accommodations" description="Allow users to leave reviews and ratings for accommodations they have stayed at, including feedback on cleanliness, comfort, location, and service." />
          </Card>
        </Col>
        {/* Dining Options */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Dining Options" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Dining Options" description="Enable users to share their dining experiences and rate restaurants based on food quality, ambiance, service, and value for money." />
          </Card>
        </Col>
        {/* Attractions */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Attractions" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Attractions" description="Provide reviews and ratings for tourist attractions, landmarks, and points of interest, helping users plan their itinerary and explore new destinations." />
          </Card>
        </Col>
        {/* Transportation */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Transportation" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Transportation" description="Share reviews and ratings for transportation options such as airlines, trains, buses, and car rental services, assisting users in making informed travel decisions." />
          </Card>
        </Col>
        {/* Local Cuisine */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Local Cuisine" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Local Cuisine" description="Review and rate local cuisine and street food, sharing your favorite dishes and culinary experiences with fellow travelers." />
          </Card>
        </Col>
        {/* Entertainment */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Entertainment" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Entertainment" description="Rate entertainment venues such as theaters, cinemas, concert halls, and nightlife spots, helping others discover the best entertainment options in town." />
          </Card>
        </Col>
        {/* Shopping */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Shopping" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Shopping" description="Share reviews and ratings for shopping destinations including malls, markets, boutiques, and souvenir shops, guiding fellow travelers in finding unique and memorable souvenirs." />
          </Card>
        </Col>
        {/* Outdoor Activities */}
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="w-full"
            cover={<img alt="Outdoor Activities" src="https://via.placeholder.com/300" />}
          >
            <Meta title="Outdoor Activities" description="Review outdoor activities such as hiking trails, parks, beaches, and adventure sports facilities, helping others find exciting outdoor experiences and scenic spots to explore." />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UserReviewsPage;
