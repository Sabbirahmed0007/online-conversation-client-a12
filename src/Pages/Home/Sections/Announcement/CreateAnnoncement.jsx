import React from 'react';
import UseAuth from '../../../../Hooks/UseAuth';
import './announcement.css'
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


// const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateAnnoncement = () => {
    const {user}=UseAuth();
    const axiosSecure = UseAxiosSecure();



    const handleCreateAnnouncement = e=>{
        e.preventDefault();

        const form = e.target;

        const authorName = form.name.value;
        const authorImage = form.image.value;
        const title = form.title.value;
        const description = form.description.value;

        const docs = {authorName, authorImage, title, description};
        console.log(docs);

        axiosSecure.post('/createAnnouncement', docs)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: "Announcement has been created successfully",
                    icon:'success',
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  form.reset();
            }
        })
        .catch(error=>console.log(error));


    }








    return (
        <div className='flex flex-col-reverse lg:flex-row h-screen items-center justify-center lg:py-3 bg'>
            <Helmet>
                <title>Dashboard | Create Announcement</title>
            </Helmet>
            <div className='max-w-md  lg:max-w-lg bg-transparent shadow-lg rounded-lg p-2 box-border'>
                <form onSubmit={handleCreateAnnouncement} className=' text-left'>
                    <div className='flex items-center justify-evenly my-3 bg-slate-200 rounded-lg p-1'>
                        <label htmlFor="name" className='font-bold'>Name: </label>
                        <input type="text" name="name" id="" defaultValue={user?.displayName} className='outline-none p-2 font-bold w-full bg-slate-200 rounded-lg' />
                    </div>
                    <div className='flex items-center justify-evenly my-3 bg-slate-200 rounded-lg p-1'>
                        <label htmlFor="image" className='font-bold'>Image: </label>
                        <input type="text" name="image" id="" defaultValue={user.photoURL} className='outline-none p-2 w-full bg-slate-200 rounded-lg' placeholder=''/>
                        {/* <input type="file" name="image" id="" /> */}
                    </div>
                    <div className='flex items-center justify-evenly my-3 bg-slate-200 rounded-lg p-1'>
                        <label htmlFor="name" className='font-bold'>Title: </label>
                        <input type="text" name="title" id=""  className='outline-none py-2 font-semibold w-full bg-slate-200 rounded-lg p-2' placeholder='Title here...'/>
                    </div>
                    <div className='my-4 flex'>
                        <span>
                        {/* <label htmlFor="description" className='font-bold bg-slate-200 absolute'>Description: </label> */}
                        </span>
                        <textarea name="description" id="" cols="40" rows="5" className='outline-none w-full bg-slate-200 font-bold rounded-lg p-2' placeholder='Description...'></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='btn bg-gradient-to-r from-purple-400 to-violet-600 text-clip text-white mb-2'>Make Announcement</button>
                    </div>
                </form>
            </div>
            <div>
                <img src="https://i.ibb.co/xqrfZLT/pexels-photo-3851253.webp" alt="" className='lg:h-full rounded-lg'/>
            </div>
        </div>
    );
};

export default CreateAnnoncement;