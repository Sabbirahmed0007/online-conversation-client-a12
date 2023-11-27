import React, { useEffect, useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { IoNotifications } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = ({user}) => {


    const [theme, setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"): "light")

    // Toggling light mode and dark mode
    useEffect(()=>{
        localStorage.setItem("theme", theme );
        const localTheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute("data-theme", localTheme)
    },[theme])


    const navlinks=<div className='flex flex-col lg:flex-row gap-3 text-md'>
            <NavLink className={({isPanding, isActive})=> isPanding ? 'pending': isActive? 'active font-bold  text-red-600 ': 'bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text font-bold hover:drop-shadow-2xl'} to={'/'}>Home</NavLink>
            <NavLink className={({isPanding, isActive})=> isPanding ? 'pending': isActive? 'active font-bold  text-red-600 ': 'bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text font-bold hover:drop-shadow-2xl'} to={'/membership'}>Membership</NavLink>
            <NavLink className={({isPanding, isActive})=> isPanding ? 'pending': isActive? 'active font-bold  text-red-600 ': 'bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text font-bold hover:drop-shadow-2xl'} to={'/notifications'} title='Notifications'><IoNotifications className='text-xl mx-auto text-center  text-black' /></NavLink>
            <NavLink className={({isPanding, isActive})=> isPanding ? 'pending': isActive? 'active font-bold  text-red-600 ': 'bg-gradient-to-br from-indigo-700 to-green-500 text-transparent bg-clip-text font-bold hover:drop-shadow-2xl'} to={'/joinus'}>Join Us</NavLink>
    </div>





    return (
        <div className='sticky top-0 drop-shadow-xl z-50 border-b-2 bg-gradient-to-r from-gray-400  to-white'>
            <div className="navbar ">
                <div className="navbar-start">
                    <NavLink  className='flex items-center relative '><img src="https://i.ibb.co/fndWgGd/ecko-Arena-logo.png" alt="" className='w-24   mx-auto' /><span className='font-satisfy text-lime-300 text-2xl absolute -right-8'>Arena</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
                </div>

                     <div className="navbar-end">
                        
                        {user ? <div className="dropdown dropdown-end">
                            
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ring-2 mx-2">
                            <div className="w-10 rounded-full">
                                {
                                    // user? <img src={user.photoURL} /> : ""
                                }
                                
                            </div>
                            </label> 
                            
                            
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className='flex'>
                            <div  className='flex justify-between'>
                                <label className="swap swap-rotate">

                                    <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                                    
                                    {/* light */}

                                    <svg className="swap-on fill-current w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                                    
                                    {/* dark*/}
                                    <svg className="swap-off fill-current w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                                    
                                </label>
                                <span>{theme=== 'dark'? <h2 className='font-bold'>Dark</h2>:<h2 className='font-bold'>Light</h2>}</span>
                            </div>
                            </li>
                            {/* <li className='mx-3 font-bold'>{user && user.displayName}</li>
                            <li className='font-bold text-fuchsia-600'>{user?<Link onClick={handleLogOut}>Logout</Link>: <Link to={'/login'}>Log in</Link> }</li> */}
                            </ul>
                            </div>:
                            <div  className='flex justify-between items-center'>
                            <label className="swap swap-rotate ">

                                <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                                
                                {/* light */}

                                <svg className="swap-on fill-current w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                                
                                {/* dark*/}
                                <svg className="swap-off fill-current w-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                                
                            </label>
                            <span>{theme=== 'dark'? <h2 className='font-bold'>Dark</h2>:<h2 className='font-bold'>Light</h2>}</span>
                        </div>
                        }
                        
                    </div>

                    {/* menu bar */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu className='text-xl text-indigo-800'></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-100 rounded-box w-48 text-center absolute right-0">
                            {navlinks}
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;