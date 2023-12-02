import React from 'react';
import './banner.css';



const Banner = () => {



    return (
        
            <div className="hero min-h-[350px] banner-bg">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl mx-auto flex bg-white rounded-lg">
                    <input type="text" name="search" id="" className='w-full p-2 rounded-l-lg outline-none' />
                    <button className=' bg-sky-400 hover:bg-sky-500 text-white p-2 font-bold e outline-none border-none rounded-r-lg'>Search</button>
                </div>
                </div>
            </div>

    );
};

export default Banner;