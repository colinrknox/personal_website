import React from "react";
import "./Tiles.css";

const blogPosts = [
  {
    title: 'Boost your conversion rate',
    author: 'Michael Foster',
    date: 'Mar 16, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    author: 'Lindsay Walton',
    date: 'Mar 10, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
  },
  {
    title: 'Improve your customer experience',
    author: 'Tom Cook',
    date: 'Feb 12, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
  },
];

function Tiles() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold text-gray-800 sm:text-4xl">
            Posts
          </h2>
          <p className="mt-3 text-center text-xl text-gray-500 sm:mt-4">
            Discussing tech topics
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.title} className="rounded-lg shadow-md overflow-hidden hover:shadow-xl">
              <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              <div className="p-6">
                <p className="text-sm font-medium text-gray-500">{post.date} · {post.author}</p>
                <p className="text-xl font-semibold text-gray-900 mt-2">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tiles;
