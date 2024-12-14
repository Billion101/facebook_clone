import { useState } from 'react';
import { 
  HomeIcon, 
  UsersIcon, 
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left */}
          <div className="flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
              alt="Facebook"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <div className="hidden sm:block ml-2 relative">
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-gray-100 p-2 rounded-full pl-4 outline-none w-[240px] lg:w-[320px]"
              />
            </div>
            <div className="sm:hidden ml-2">
              <IconButton Icon={MagnifyingGlassIcon} onClick={() => setIsSearchVisible(!isSearchVisible)} />
            </div>
          </div>

          {/* Center */}
          <div className="flex space-x-1 sm:space-x-2">
            <TabIcon Icon={HomeIcon} active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <TabIcon Icon={UsersIcon} active={activeTab === 'friends'} onClick={() => setActiveTab('friends')} />
            <TabIcon Icon={PlayIcon} active={activeTab === 'watch'} onClick={() => setActiveTab('watch')} className="hidden sm:flex" />
            <TabIcon Icon={ShoppingBagIcon} active={activeTab === 'marketplace'} onClick={() => setActiveTab('marketplace')} className="hidden md:flex" />
            <TabIcon Icon={UserGroupIcon} active={activeTab === 'groups'} onClick={() => setActiveTab('groups')} className="hidden lg:flex" />
          </div>

          {/* Right */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <IconButton Icon={Bars3Icon} className="sm:hidden" />
            <IconButton Icon={ChatBubbleOvalLeftIcon} className="hidden sm:flex" />
            <IconButton Icon={BellIcon} />
            <img
              src="https://placekitten.com/32/32"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchVisible && (
          <div className="sm:hidden p-2 border-t">
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-full bg-gray-100 p-2 rounded-full pl-4 outline-none"
            />
          </div>
        )}
      </div>
    </nav>
  );
}

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

export default Navbar;