import React from 'react';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { Link } from 'react-router-dom';



const ShowAllPost = ({post}) => {


    const {authorName, authorimage, tags, postTitle, createdAt, downVote , upVote, _id}= post;
    // console.log(post);
    // console.log(authorName, authorimage, tags);

    


    return (
        <div>
            {/* <Link to={`/postDetails/${_id}`}> */}
                <div className='shadow-md p-4 rounded-md '>
                    <div className='flex items-center gap-2'>
                    <div className="avatar">
                        <div className="w-12">
                            <img src={authorimage} className='rounded-full'/>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold'>{authorName}</h1>
                        <p className='text-gray-500 '>{new Date(createdAt).toLocaleDateString()}</p>
                    </div>
                    </div>
                    <div className='text-center font-bold my-4'>
                        <h2 className=''>{postTitle}</h2>
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
                        <div className='text-center'>
                            <Link to={`/postdetails/${_id}`}>
                                <button className='btn-accent btn btn-xs'> Show more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            {/* </Link> */}
        </div>
    );
};

export default ShowAllPost;