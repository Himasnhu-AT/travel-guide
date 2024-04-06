import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const TravelBlogPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Travel Blog or Articles</h1>
      <div className="flex flex-wrap justify-between">
        <Card
          hoverable
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
          cover={<img alt="Article 1" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Article Title 1" description="[Write engaging travel articles or blogs covering various topics, such as destination guides, travel tips, personal travel experiences, and industry updates.]" />
        </Card>
        <Card
          hoverable
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
          cover={<img alt="Article 2" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Article Title 2" description="[Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.]" />
        </Card>
        <Card
          hoverable
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
          cover={<img alt="Article 3" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Article Title 3" description="[Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.]" />
        </Card>
        <Card
          hoverable
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
          cover={<img alt="Article 4" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Article Title 4" description="[Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.]" />
        </Card>
        <Card
          hoverable
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
          cover={<img alt="Article 5" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Article Title 5" description="[Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.]" />
        </Card>
        <Card
          hoverable
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
          cover={<img alt="Article 6" src="https://via.placeholder.com/300" />}
        >
          <Meta title="Article Title 6" description="[Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.]" />
        </Card>
      </div>
    </div>
  );
}

export default TravelBlogPage;
