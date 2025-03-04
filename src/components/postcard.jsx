import React from 'react'
import LikeButton from './likebutton'
function PostCard ({post}) {
  return (
        <div className='border-2 border-gray-500 mt-3 w-80 h-60 rounded-2xl'>
            <img src={post.profileImage} alt={post.username} className='rounded-full float-left  mx-2 my-2 w-20 h-20 object-cover' />
            <h2 className='text-black text-2xl mx-3 my-4 font-bold'>{post.username}</h2>
            <p className='text-gray-600 text-1xl mx-3 my-12 text-center'>{post.content}</p>
            <LikeButton/>
        </div>
  )
}

export default PostCard
