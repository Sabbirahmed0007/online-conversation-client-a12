import React, { useState } from 'react';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setshow]=useState(false);


    const handleLogin=(e)=>{

    }


    //Login with Google
    const handleSignInByGoogle=()=>{
        
    }

    // login with github
    const handleGithubSignIn=()=>{

    }

    return (
        <div className='w-11/12 mx-auto ' >
        <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-0'>
            <div className='w-full  hidden lg:block'>
                <img src="https://i.ibb.co/LJ8VVKf/58a7f1fb13d340917c81c0bb63f6c7db.jpg" alt="" className='w-full mx-auto h-screen' />
            </div>
            <div className="card  w-full max-w-lg shadow-2xl drop-shadow-xl bg-base-100 mx-auto relative my-24 z-0 border">
                    {/* <div className='absolute -top-20 left-40 lg:left-44 z-30'>
                        <img src="https://i.ibb.co/0Zqfy4F/c0c8178e509b2c6ec222408e527ba861-removebg-preview.png" alt=""  className='w-40 bg-white ring-pink-200 ring-1 rounded-full opacity-60'/>
                    </div> */}
                    <form onSubmit={handleLogin} className="card-body mt-14 ">
                        <h1 className='text-3xl font-bold text-center text-sky-400 first-letter:text-fuchsia-600'>Login Now</h1>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-[16px] font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered  focus:outline-none border-none bg-slate-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-[16px] font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered  focus:outline-none border-none bg-slate-200" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                        <span className="label-text text-[16px] font-semibold">Password</span>
                        </label>
                        <input type={show? "text" :"password"} placeholder="password" name='password' className="input input-bordered focus:outline-none border-none bg-slate-200 " required />
                        <p onClick={()=>setshow(!show)} className='absolute right-4 top-12'>
                        {
                            show? <BiSolidShow className=' text-2xl text-black'></BiSolidShow>:<AiFillEyeInvisible className='text-2xl text-black'></AiFillEyeInvisible>
                        }
                    </p>
                        
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn bg-purple-800 hover:bg-fuchsia-800 bg-opacity-70 text-white rounded-3xl">Login</button>
                    </div>
                    </form>
                    <div className='mb-10 text-left mx-10'>
                        <p>New here? Create an Accout <Link to={'/register'} className='link font-semibold'>Sign Up</Link></p>
                    </div>
                    <div className='px-8'>
                        <h1 className='font-bold text-center mb-3 text-2xl text-fuchsia-700'>More Options to Log in</h1>
                        <div className='text-center flex flex-col lg:flex-row w-full mx-auto gap-2 my-2 -mt-6 lg:gap-1 items-center justify-center  p-5'>
                            <button onClick={handleSignInByGoogle}  className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-purple-800 drop-shadow-xl'>
                                <img src="https://i.ibb.co/FKydQJc/604199df880fb029291ddd7c382e828b-removebg-preview.png" alt="" className='w-8' />
                                Log in with Google
                            </button>
                            <button onClick={handleGithubSignIn} className='btn btn-outline hover:bg-slate-300 hover:text-violet-700 my-2 font-bold text-purple-800 drop-shadow-xl'>
                                <img src="https://i.ibb.co/cytKcJw/e5638f79-3ce6-4277-9d18-1cdf50c5ee6f.png" alt="" className='w-8' />
                                Log in with GitHub
                            </button>

                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Login;