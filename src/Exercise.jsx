import React from "react";
import PostCard from './PostCard'; 
import { postsData } from "./postsData"; // Pastikan ini sesuai dengan nama file/variabel Anda

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Judul Utama dengan warna Special Red2 */}
      <h1 className="text-2xl font-bold text-center mb-8 text-[#b83016]">
        Post Cards
      </h1>
      
      {/* Grid diset ke 6 kolom untuk layar extra large (xl:grid-cols-6) */}
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