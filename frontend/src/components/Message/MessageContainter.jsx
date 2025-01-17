import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import Lottie from 'lottie-react';
import ChatAnimation from '../../assets/ChatAnimation.json';


const MessageContainter = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    
    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    },[setSelectedConversation]);

    return (
        <div className="md:min-w-[1050px] flex flex-col">
            {!selectedConversation ? ( 
            <NoChatSelected /> 
            ) : (
            <>
                <div className="bg-select-bg px-4 py-2 mb-2 flex justify-end">
                {/* <span className="label-text text-white">To: </span> */}
                <span className="text-white font-bold">{selectedConversation.fullName}</span>
                </div>

                <Messages />
                <MessageInput/>
            </>
            )}
        </div>
    );
};

export default MessageContainter;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-black/80 font-semibold flex flex-col items-center gap-2'>
                <p className="text-2xl md:text-4xl font-bold"> Welcome 👋 {authUser.fullName}!</p>
                <p className="text-lg md:text-2xl">Select a chat to start your conversation.</p>
                <div className="w-80 md:w-100">
                    <Lottie animationData={ChatAnimation} loop />
                </div>
                {/* <TiMessages className='text-3xl md:text-6xl text-center' /> */}
            </div>
        </div>
    );
};



// starter
// import React from 'react'
// import Messages from './Messages'

// const MessageContainter = () => {
//     return (
//         <div className="md:min-w-[1050px] flex flex-col">
//         <>
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text">To:</span>
//             <span className="text-gray-800 font-bold">David Wan</span>
//             </div>

//             <Messages />
//             {/* <MessageInput/> */}
//         </>
//         </div>
//     )
// }

// export default MessageContainter