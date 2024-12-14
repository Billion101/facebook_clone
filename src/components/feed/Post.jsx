import React from 'react';
import defaultAvatar from '../../assets/images/default-avatar.svg';

function Post({ user, content, timestamp, image, likes, comments }) {
  return (
    <div className="bg-white mt-4 sm:mt-6 rounded-xl shadow-md">
      <div className="p-3 sm:p-5">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src={defaultAvatar}
            alt={user}
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

export default Post;