import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext();
    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        const success = handledInputErrors({fullName, username, password, confirmPassword, gender})
        if(!success) return;

        try {
            const res = await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            // local storage
            localStorage.setItem("chat-user", JSON.stringify(data))
            // context
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return {loading, signup};
}

export default useSignup;

function handledInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all the fields')
        return false
    }

    if(password !== confirmPassword){
        toast.error('Password does not match')
        return false
    }

    if(password.length < 8){
        toast.error('Password must have at least 8 characters')
        return false
    }

    return true;
}