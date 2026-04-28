import React from "react";
import PostCard from './PostCard';
import { postsData } from './postsData';

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      
      <h1 className="text-2xl font-bold text-center mb-8 text-[#b83016]">
        Post Cards
      </h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {postsData.map((post) => (
          <PostCard 
            key={post.id} 
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>

    </div>
  );
}

export default Exercise;