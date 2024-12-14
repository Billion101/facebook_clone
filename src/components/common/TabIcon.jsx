import React from 'react';

function TabIcon({ Icon, active, onClick, className = '' }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-3 sm:px-6 lg:px-10 py-3 rounded-xl hover:bg-gray-100 ${
        active ? 'border-b-4 border-facebook-blue' : ''
      } ${className}`}
    >
      <Icon className={`h-6 w-6 ${active ? 'text-facebook-blue' : 'text-gray-500'}`} />
    </div>
  );
}

export default TabIcon;