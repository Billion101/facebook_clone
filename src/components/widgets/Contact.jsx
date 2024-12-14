import React from 'react';
import defaultAvatar from '../../assets/images/default-avatar.svg';

function Contact({ name }) {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-xl cursor-pointer">
      <img
        className="rounded-full w-8 h-8"
        src={defaultAvatar}
        alt={name}
      />
      <p className="font-medium text-sm">{name}</p>
    </div>
  );
}

export default Contact;