import React from 'react'
import SearchInput from "./SearchInput";
import ChatBox from './ChatBox';
import LogoutButton from '../LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <ChatBox />
      <LogoutButton />
    </div>
  )
}

export default Sidebar;
