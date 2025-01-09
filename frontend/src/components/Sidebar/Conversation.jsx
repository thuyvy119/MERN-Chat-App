import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx, emoji}) => {
    const {selectedConversation, setSelectedConversation}=  useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    console.log('Online Users:', onlineUsers)
    console.log('Conversation ID:', conversation._id)
    console.log('Is Online:', isOnline)

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-hover rounded p-2 py-1 cursor-pointer"
        ${isSelected ? "bg-select-bg" : ""}`}
        onClick={() => setSelectedConversation(conversation)}>
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full">
                <img src={conversation.avatar} alt="user avatar" />
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                <p className="font-bold text-white">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
                </div>
            </div>
            </div>

            {!lastIdx && <div className="divider my-0 py-0 h-1 mt-2 mb-1"></div>}
        </>
    )
}

export default Conversation