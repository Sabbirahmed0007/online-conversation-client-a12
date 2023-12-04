import React, { useState } from 'react';
import UseAuth from '../../../../Hooks/UseAuth';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import UseAxiosPublic from '../../../../Hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';



const AddPost = () => {
    

    const {user}=UseAuth();
    const axiosPUblic = UseAxiosPublic();
    const axiosSecure= UseAxiosSecure();
    
    const [userPostCount, setUserPostCount] = useState('');
    const canAddPost = userPostCount < 5;


    const {data: posts=[], refetch}= useQuery({
        queryKey: ['primiumMemberShip'],
        queryFn:async()=>{
            const res = await axiosSecure(`/primiumMemberShip/${user.email}`);
            setUserPostCount(res.data);
            // return res.data
        },
        staleTime: 1000,
    })


    const handleAddPost = async(e) =>{
        e.preventDefault();
        const form = e.target;
        
        const authorimage = form.authorImage.value;
        const authorName = form.authorName.value;
        const authorEmail = form.authorEmail.value;
        const postTitle = form.postTitle.value;
        const postDescription = form.postDescription.value;
        const tags = form.tags.value;
        const upVote = parseInt(form.upVote.value);
        const downVote = parseInt(form.downVote.value);
        
        console.log({authorEmail, authorName, authorimage, tags, upVote, downVote});
        const postProperty ={authorEmail, authorName, authorimage, tags, upVote, downVote, postDescription, postTitle};

        axiosSecure.post('/addposts', postProperty)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Post has been uploaded successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(error=>{
            console.error('Error', error);
            Swal.fire('',error,'error');
        })

    }




    const tagOptions = [
        { value: 'technology', label: 'Technology' },
        { value: 'science', label: 'Science' },
        { value: 'travel', label: 'Travel' },
        { value: 'food', label: 'Food' },
        { value: 'fashion', label: 'Fashion' },
        { value: 'music', label: 'Music' },
        { value: 'movies', label: 'Movies' },
        { value: 'sports', label: 'Sports' },
        { value: 'books', label: 'Books' },
        { value: 'health', label: 'Health' },
        { value: 'design', label: 'Design' },
        { value: 'education', label: 'Education' },
    ];



    return (
        <div className=' w-10/12 mx-auto flex items-center justify-center'>
            {canAddPost ? (
                    <form onSubmit={handleAddPost} className='max-w-md lg:max-w-lg'>
                      <div className=' p-1'>
                        <label htmlFor="authorImage" className='font-bold'>Author Image: </label>
                        <input type="text" name="authorImage" id="" defaultValue={user.photoURL} className='outline-none p-2 font-bold w-full bg-slate-200 rounded-lg' required />
                        {/* <input type="file" name="authorImage" id=""  className='outline-none p-2 font-bold w-full bg-slate-200 rounded-lg' /> */}
                      </div>
                      <div className='my-3 p-1'>
                        <label htmlFor="authorName" className='font-bold'>Author Name: </label>
                        <input type="text" name="authorName" id="" defaultValue={user.displayName} className='outline-none p-2 font-bold w-full bg-slate-200 rounded-lg' required />
                      </div>
                      <div className='my-3 rounded-lg p-1'>
                        <label htmlFor="authorEmail" className='font-bold'>Author Email: </label>
                        <input type="email" name="authorEmail" defaultValue={user.email} id="" className='outline-none p-2 w-full bg-slate-200 rounded-lg' required/>
                      </div>
                      <div className='my-3 rounded-lg p-1'>
                        <label htmlFor="postTitle" className='font-bold'>Post Title: </label>
                        <input type="text" name="postTitle"  id="" className='outline-none p-2 w-full bg-slate-200 rounded-lg' required/>
                      </div>
                      <div className='my-4'>
                        <span>
                            <label htmlFor="postDescription" className='font-bold '>Post Description: </label>
                        </span>
                        <textarea name="postDescription" id="postDescription" cols="40" rows="5" className='outline-none w-full bg-slate-200 font-bold rounded-lg p-2' placeholder='Description...' required></textarea>
                    </div>

                      <div className=' my-3  rounded-lg p-1'>
                        <label htmlFor="tag" className='font-bold'>Tag: </label>
                        <Select options={tagOptions} name='tags' className='w-full' placeholder="Select a tag" required>
                        </Select>
                      </div>
                      <div className='my-3 rounded-lg p-1'>
                            <label htmlFor="upVote" className='font-bold'>UpVote: </label>
                            <input type="number" name="upVote" id="upVote" defaultValue={0} min={0}  className='outline-none p-2 w-full bg-slate-200 rounded-lg' />
                        </div>

                        <div className='my-3 rounded-lg p-1'>
                            <label htmlFor="downVote" className='font-bold'>DownVote: </label>
                            <input type="number" name="downVote" id="downVote" defaultValue={0} min={0} className='outline-none p-2 w-full bg-slate-200 rounded-lg' />
                        </div>
                      <div className='text-center'>
                        <button type="submit" className='btn bg-gradient-to-r from-amber-400 to-lime-500 text-clip text-white mb-2'>Create Post</button>
                      </div>
                    </form>
                     ): (
                    <div className='text-center my-4'>
                      <p className='font-railway font-semibold'>You have reached the maximum limit of 5 posts.</p>
                      <Link to={'/membership'} className='text-center my-4'>
                        <button className='btn btn-warning'>
                            Become a Member
                        </button>
                      </Link>
                    </div>
                   )} 

        </div>
    );
};

export default AddPost;