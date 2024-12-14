import React, { useState } from 'react';
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
import IconButton from '../common/IconButton';
import TabIcon from '../common/TabIcon';
import facebookLogo from '../../assets/images/facebook-logo.svg';
import defaultAvatar from '../../assets/images/default-avatar.svg';

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
              src={facebookLogo}
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
              src={defaultAvatar}
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

export default Navbar;