import { useState } from 'react';
import { 
  PhotoIcon, 
  VideoCameraIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';

function Feed() {
  const [posts] = useState([
    {
      id: 1,
      user: 'John Doe',
      content: 'Just another beautiful day! 🌞',
      timestamp: '2h',
      image: 'https://source.unsplash.com/random/800x600?nature',
      likes: 243,
      comments: 56
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Check out my new project! 💻',
      timestamp: '5h',
      image: 'https://source.unsplash.com/random/800x600?technology',
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

function CreatePost() {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md">
      <div className="flex space-x-2 sm:space-x-4 p-2 sm:p-4 items-center">
        <img
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src="https://placekitten.com/32/32"
          alt="Profile"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-10 sm:h-12 bg-gray-100 flex-grow px-4 sm:px-5 focus:outline-none text-sm sm:text-base"
            type="text"
            placeholder="What's on your mind?"
          />
        </form>
      </div>

      <div className="flex justify-evenly p-2 sm:p-3 border-t">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-1 sm:p-2 rounded-xl cursor-pointer">
          <VideoCameraIcon className="h-5 sm:h-7 text-red-500" />
          <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Live Video</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-1 sm:p-2 rounded-xl cursor-pointer">
          <PhotoIcon className="h-5 sm:h-7 text-green-500" />
          <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Photo/Video</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-1 sm:p-2 rounded-xl cursor-pointer">
          <FaceSmileIcon className="h-5 sm:h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

function Post({ user, content, timestamp, image, likes, comments }) {
  return (
    <div className="bg-white mt-4 sm:mt-6 rounded-xl shadow-md">
      <div className="p-3 sm:p-5">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src="https://placekitten.com/32/32"
            alt=""
          />
          <div>
            <p className="font-medium text-sm sm:text-base">{user}</p>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>

        <p className="pt-3 sm:pt-4 text-sm sm:text-base">{content}</p>
      </div>

      {image && (
        <div className="relative h-48 sm:h-56 md:h-96 bg-white">
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-xl bg-white shadow-md text-gray-400 border-t">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <p className="text-xs sm:text-sm">Like</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <p className="text-xs sm:text-sm">Comment</p>
        </div>

        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <p className="text-xs sm:text-sm">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;