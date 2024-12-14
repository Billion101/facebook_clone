import React from 'react';

function SidebarRow({ Icon, title, isExpanded }) {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      <Icon className="h-6 w-6 text-facebook-blue" />
      {isExpanded && <p className="font-medium">{title}</p>}
    </div>
  );
}

export default SidebarRow;