import React, { useState } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';

function Feed() {
  const [posts] = useState([
    {
      id: 1,
      user: 'John Doe',
      content: 'Just another beautiful day! 🌞',
      timestamp: '2h',
      image: null, // You'll need to add your own image in assets
      likes: 243,
      comments: 56
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Check out my new project! 💻',
      timestamp: '5h',
      image: null, // You'll need to add your own image in assets
      likes: 156,
      comments: 23
    }
  ]);

  return (
    <div className="flex-grow h-screen pb-44 pt-6 px-2 sm:px-4 overflow-y-auto">
      <div className="mx-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <CreatePost />
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;