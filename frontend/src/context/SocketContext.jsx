import { useEffect, useState, createContext, useContext } from 'react'
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if (authUser) {
            console.log('Initializing socket for userId:', authUser._id);
            const socket = io("http://localhost:5000", {
                query:{
                    userId: authUser._id,
                },
                // reconnection: true,
                // reconnectionAttempts: 5,
                // reconnectionDelay: 1000,
                // transports: ['websocket']
            });
            
            // Add to test
            // socket.on('connect_error', (err) => {
            //     console.error('Socket connection error:', err)
            // });

            // socket.on('connect', () => {
            //     console.log('Socket connected')
            // });

            // socket.on('reconnect_attempt', (attempt) => {
            //     console.log('Reconnecting attempt:', attempt)
            // });
            
            // socket.on('connect_timeout', (timeout) => {
            //     console.error('Connection timed out:', timeout)
            // });

            setSocket(socket);

            // use to listen to the events (both client and server)
            socket.on("getOnlineUsers", (users) => {
                console.log('Received Online Users:', users)
                // const filteredUsers = users.filter(userId => userId !== authUser._id);
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
}