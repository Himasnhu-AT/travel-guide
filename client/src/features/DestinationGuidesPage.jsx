import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const DestinationGuidesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Destination Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Card
          hoverable
          className="w-full"
          cover={<img alt="Destination 1" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Destination 1" description="[Include detailed information about Destination 1, such as its history, culture, landmarks, and local customs.]" />
        </Card>
        <Card
          hoverable
          className="w-full"
          cover={<img alt="Destination 2" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Destination 2" description="[Include detailed information about Destination 2, such as its history, culture, landmarks, and local customs.]" />
        </Card>
        <Card
          hoverable
          className="w-full"
          cover={<img alt="Destination 3" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Destination 3" description="[Include detailed information about Destination 3, such as its history, culture, landmarks, and local customs.]" />
        </Card>
        <Card
          hoverable
          className="w-full"
          cover={<img alt="Destination 4" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Destination 4" description="[Include detailed information about Destination 4, such as its history, culture, landmarks, and local customs.]" />
        </Card>
        
      </div>
    </div>
  );
}

export default DestinationGuidesPage;
