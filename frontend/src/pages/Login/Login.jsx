import React from 'react'

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-8 rounded-lg shadow-md bg-white/30 border-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg ">
            <h1 className="text-3xl font-semibold text-center text-gray-500">
            Login
            <span className="text-black"> Chat App</span>
            </h1>
            <form className='space-y-2 mt-4'>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
                </div>
                <div className='flex justify-end'>
                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </a>
                </div>

                <div>
                    <button className="btn btn-block btn-sm mt-2 bg-black/90 text-white hover:bg-black/60 active:bg-gray-600 border-none">Login</button>
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



