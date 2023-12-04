import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white '>
            <div className='text-left mx-2 py-3 absolute'>
                <button onClick={()=> navigate(-1)} className='btn btn-warning mx-2 font-railway'>⬅Prev </button>
                <NavLink className="btn" to={'/'}>Home</NavLink>
            </div>
            {/* <img src="https://i.ibb.co/vdCnJNt/d856f9378298317e5d517460b4b828f2.jpg" alt="" className='w-full h-screen' /> */}
            {/* <img src="https://i.ibb.co/FHYBhnb/eee6497eb3b97566443273b0485fbac5.jpg" alt="" className='w-11/12 mx-auto h-[500px] lg:9/12' /> */}
            <img src="https://i.ibb.co/SJ2V0s3/OIG-F87b-B.jpg" alt="" className='w-full mx-auto h-[700px] lg:9/12' />
            {/* <img src="https://i.ibb.co/Jj7Mgpt/OIG.jpg" alt="" className='w-11/12 mx-auto h-[500px] lg:9/12' /> */}
        </div>
    );
};

export default ErrorPage;