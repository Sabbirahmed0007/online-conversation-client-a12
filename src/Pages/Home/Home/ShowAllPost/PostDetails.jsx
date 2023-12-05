import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import { MdOutlineComment } from 'react-icons/md';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const PostDetails = () => {

    const axiosSecure = UseAxiosSecure();
    const { id } = useParams(); 
    
    const { data: details } = useQuery({
        queryKey: ['postDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/postDetails/${id}`);
            console.log(res.data);
            return res.data;
        }

    })
    console.log(details);
    const {authorName, authorimage, downVote, postDescription, postTitle, tags,upVote, _id}=details;

    return (
        <div className='w-11/12 mx-auto my-8 '>
            <div className=''>
                <img src={authorimage} alt="" className='w-16 rounded-xl'/>
                <p className='text-xl font-semibold my-2'>{authorName}</p>
            </div>
            <div className='text-center'>
                <h2 className='text-xl font-bold'>{postTitle}</h2>
                <h1 className='text-justify font-medium'>{postDescription}</h1>
                
            </div>
            <div className=' w-4/5 mx-auto  flex items-center justify-evenly'>
                        <div className='font-bold text-red-500'>#{tags}</div>
                        <div className='flex items-center justify-center gap-1'><FaThumbsUp className='text-xl'></FaThumbsUp><span>{upVote}</span></div>
                        <div className='flex items-center justify-center gap-1'><FaThumbsDown className='text-xl'></FaThumbsDown>{downVote}</div>
                        <div className=''>
                            <Link to={`/comments/${_id}`}>
                                <MdOutlineComment className='text-xl'></MdOutlineComment>
                            </Link>
                        </div>
                    </div>
        </div>
    );
};

export default PostDetails;