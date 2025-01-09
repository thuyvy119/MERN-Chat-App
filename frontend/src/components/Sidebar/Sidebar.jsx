import React from 'react'
import SearchInput from './SearchInput'
import ChatBox from './ChatBox'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className="border-r border-slate-50 p-4 flex flex-col bg-sidebar-gradient">
      <SearchInput />
      <div className="divider border-gray-80"></div>
      <ChatBox />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
