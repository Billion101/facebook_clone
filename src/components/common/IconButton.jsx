import React from 'react';

function IconButton({ Icon, onClick, className = '' }) {
  return (
    <div 
      onClick={onClick}
      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 ${className}`}
    >
      <Icon className="h-5 w-5 text-black" />
    </div>
  );
}

export default IconButton;