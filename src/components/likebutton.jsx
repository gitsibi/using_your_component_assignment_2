import React, { useState } from 'react'

function LikeButton ({isLiked}) {

  const [liked,setLiked]=useState(isLiked);
  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-4 py-2 rounded-lg transition-colors ${
        liked ? 'bg-red-500 text-white' : 'bg-violet-200 text-gray-700'
      }`}
    >
      {liked ? 'Liked ❤️' : 'Like'}
    </button>
    )
}


export default LikeButton



