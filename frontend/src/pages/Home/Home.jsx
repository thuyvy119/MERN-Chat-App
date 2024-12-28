import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainter from '../../components/Message/MessageContainter';


const Home = () => {
    return (
        <div className='flex sm:h-[550px] md:h-[750px] rounded-lg overflow-hidden bg-white/40 border-white/20  bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <Sidebar />
        <MessageContainter />
        
        </div>
    )
} 

export default Home
