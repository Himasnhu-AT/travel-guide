import React from 'react';
import { Link } from 'react-router-dom';

const BudgetFriendlyBlogPage = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Budget-Friendly Travel',
      description: 'Learn how to travel on a budget with these helpful tips.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Budget-Friendly Meal Ideas',
      description: 'Discover delicious meal ideas that won\'t break the bank.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Affordable Accommodation Options',
      description: 'Find budget-friendly accommodation options for your next trip.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Saving Money on Transportation',
      description: 'Tips and tricks for saving money on transportation costs while traveling.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: 'Exploring Free Attractions',
      description: 'Discover fun and free attractions to visit during your travels.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: 'Accommodation Options',
      description: 'Find budget-friendly accommodation options for your next trip.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Budget Friendly Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render blog posts */}
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 block">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetFriendlyBlogPage;
