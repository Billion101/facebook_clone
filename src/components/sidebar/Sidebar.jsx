import React, { useState } from 'react';
import { 
  UserIcon,
  UsersIcon,
  ClockIcon,
  BookmarkIcon,
  FlagIcon,
  CalendarIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`hidden sm:flex flex-col fixed left-0 top-14 ${isExpanded ? 'w-[360px]' : 'w-[70px]'} h-screen transition-all duration-300`}>
      <div className="p-2 sm:p-4 overflow-y-auto">
        <div className="space-y-2">
          <SidebarRow Icon={UserIcon} title="Your Profile" isExpanded={isExpanded} />
          <SidebarRow Icon={UsersIcon} title="Friends" isExpanded={isExpanded} />
          <SidebarRow Icon={ClockIcon} title="Memories" isExpanded={isExpanded} />
          <SidebarRow Icon={BookmarkIcon} title="Saved" isExpanded={isExpanded} />
          <SidebarRow Icon={FlagIcon} title="Pages" isExpanded={isExpanded} />
          <SidebarRow Icon={CalendarIcon} title="Events" isExpanded={isExpanded} />
          <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" isExpanded={isExpanded} />
          <SidebarRow Icon={NewspaperIcon} title="News Feed" isExpanded={isExpanded} />
          <div 
            className="flex items-center justify-center p-2 hover:bg-gray-200 rounded-xl cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ChevronDownIcon className={`h-6 w-6 text-gray-500 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;