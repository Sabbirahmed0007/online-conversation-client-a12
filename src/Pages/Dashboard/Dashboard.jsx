import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { IoMenu, IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineCardMembership } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";

import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import UseAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {

    const [isAdmin]= UseAdmin();


    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer" className=" drawer-button m-3"><IoMenu className='text-3xl text-black'></IoMenu></label>
            <div className="drawer-content h-screen  py-5">
            {/* Page content here */}
            <Outlet></Outlet>
            </div> 
            <div className="drawer-side ">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 w-80 min-h-full   text-amber-800 font-bold bg-purple-300 space-y-2">
                <div>
                    <NavLink  className='flex items-center  rounded-full'><img src="https://i.ibb.co/xDdLKcX/OIG-removebg-preview.png" alt="" className='w-24   mx-auto' /></NavLink>
                    <h2 className='text-3xl font-bold text-center text-emerald-500'>ConvoConnect</h2>
                </div>
                {/* Sidebar content here */}

                {
                    isAdmin ?
                    <>
                        {/* Admin routes */}
                        <li><NavLink to={'/dashboard/adminHome'}><CgProfile className='text-xl'></CgProfile> Admin Profile</NavLink></li>
                        <li><NavLink to={'/dashboard/createAnnouncement'}><GrAnnounce className='text-xl'></GrAnnounce>Create Announcement</NavLink></li>
                        <li><NavLink to={'/dashboard/manageUsers'}><FaUsers className='text-xl'></FaUsers> Manage Users</NavLink></li>
                        <li><NavLink to={'/dashboard/activities'}><RxActivityLog className='text-xl'></RxActivityLog>Activities</NavLink></li>
                    </>
                    :
                    <>
                        <li><NavLink to={'/dashboard/myProfile'}><CgProfile className='text-xl'></CgProfile>My Profile</NavLink></li>
                        <li><NavLink to={'/dashboard/addPost'}><MdPostAdd className='text-xl'></MdPostAdd>Add Post</NavLink></li>
                        <li><NavLink to={'/dashboard/myPost'}><RxActivityLog className='text-xl'></RxActivityLog>My Post</NavLink></li>
                    </>

                }
                

                {/* User routes */}


                {/* Devider */}
                <div className="divider text-black"></div>
                {/* ------------------------------------------- */}
                <li>
                    <NavLink className="" to={"/"}>
                        <FaHome className="text-xl"></FaHome>
                        <span>Home</span>
                    </NavLink>
                    <NavLink className="" to={"/membership"}>
                        <MdOutlineCardMembership className="text-xl"></MdOutlineCardMembership>
                        <span>MemberShip</span>
                    </NavLink>

                </li>
            
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;





