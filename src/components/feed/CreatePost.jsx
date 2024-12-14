import React from 'react';
import { PhotoIcon, VideoCameraIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import defaultAvatar from '../../assets/images/default-avatar.svg';

function CreatePost() {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-md">
      <div className="flex space-x-2 sm:space-x-4 p-2 sm:p-4 items-center">
        <img
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={defaultAvatar}
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

export default CreatePost;