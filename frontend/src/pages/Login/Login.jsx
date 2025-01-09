import React from 'react'
import { Link, useBeforeUnload } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-[550px] mx-5 p-8 rounded-lg shadow-md bg-white/30 border-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg ">
            <h1 className="text-3xl font-semibold text-center text-gray-500">
            Login
            <span className="bg-txt-gradient bg-clip-text text-transparent"> Chat App</span>
            </h1>
            <form className='space-y-2 mt-4 mx-10' onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='flex justify-end'>
                    <Link to={'/signup'} className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'>
                        {"Don't"} have an account?
                    </Link>
                </div>

                <div>
                    <button className="btn btn-block btn-sm mt-3 bg-select-bg text-white text-lg py-1 hover:bg-hover active:bg-gray-600 border-none h-10 flex items-center justify-center" disabled={loading}> {loading ? <span className='loading loading-spinner'></span>: "Login"} 
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;


// starter
// import React from 'react'

// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-8 rounded-lg shadow-md bg-white/30 border-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg ">
//             <h1 className="text-3xl font-semibold text-center text-gray-500">
//             Login
//             <span className="text-black"> Chat App</span>
//             </h1>
//             <form className='space-y-2 mt-4'>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//                 </div>
//                 <div className='flex justify-end'>
//                     <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         {"Don't"} have an account?
//                     </a>
//                 </div>

//                 <div>
//                     <button className="btn btn-block btn-sm mt-2 bg-black/90 text-white hover:bg-black/60 active:bg-gray-600 border-none">Login</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     )
// }

// export default Login



