import React from 'react';
import './banner.css';



const Banner = () => {

    

    return (
        
            <div className="hero min-h-screen banner-bg">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex bg-white rounded-lg">
                    <input type="text" name="search" id="" className='w-full p-2 rounded-l-lg outline-none' />
                    <button className='btn bg-white hover:bg-white btn-active outline-none border-none'>Search</button>
                </div>
                </div>
            </div>

    );
};

export default Banner;