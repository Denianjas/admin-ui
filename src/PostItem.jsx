import React, { useState } from 'react';

const PostCard = ({ id, userId, title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    // Flexbox, rata tengah, efek hover pink dan garis tepi hitam
    <div className="flex flex-col justify-between items-center bg-white p-6 rounded-xl border border-transparent shadow-sm transition-all duration-300 hover:scale-105 hover:bg-pink-50 hover:border-black text-center">
      
      <div>
       
        <h2 className="font-bold text-md capitalize mb-3 text-gray-800">
          {title}
        </h2>
       
        <p className="text-xs text-gray-600 mb-6 leading-relaxed">
          {body}
        </p>
      </div>
      
      
      <button 
  onClick={() => setIsClicked(true)}
  className={`w-full py-2 text-sm font-semibold rounded-md transition-colors ${
    isClicked 
      ? '!bg-special-red2 !text-white' 
      : '!bg-gray-500 !text-white hover:!bg-gray-400'
  }`}
>
  {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
</button>

    </div>
  );
};

export default PostCard;