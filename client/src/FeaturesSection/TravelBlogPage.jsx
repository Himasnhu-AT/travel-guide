import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const TravelBlogPage = () => {
  // Array of objects containing information about each article
  const articles = [
    {
      id: 1,
      title: 'Article Title 1',
      image: 'https://via.placeholder.com/300',
      description: 'Write engaging travel articles or blogs covering various topics, such as destination guides, travel tips, personal travel experiences, and industry updates.',
    },
    {
      id: 2,
      title: 'Article Title 2',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    {
      id: 3,
      title: 'Article Title 3',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    {
      id: 4,
      title: 'Article Title 4',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    {
      id: 5,
      title: 'Article Title 5',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    {
      id: 6,
      title: 'Article Title 6',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    {
      id: 7,
      title: 'Article Title 7',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
    {
      id: 8,
      title: 'Article Title 8',
      image: 'https://via.placeholder.com/300',
      description: 'Continue adding informative and inspiring articles to inspire and inform your audience about different aspects of travel and exploration.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Travel Blog or Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Map over the articles array to dynamically generate cards */}
        {articles.map(article => (
          <Card
            key={article.id}
            hoverable
            className="w-full"
            cover={<img alt={article.title} src={article.image} className="h-64 object-cover" />}
          >
            <Meta title={article.title} description={article.description} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TravelBlogPage;
