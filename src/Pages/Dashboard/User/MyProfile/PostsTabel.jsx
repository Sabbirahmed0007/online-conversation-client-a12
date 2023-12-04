import React from 'react';
import {  FaUsers } from 'react-icons/fa';
import { MdOutlineComment } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const PostsTabel = ({post, handleDelete, index}) => {
    console.log(post);

    const {_id, authorName, upVote, DownVote}= post;
    const upVotes = parseInt(upVote);
    const DownVotes = parseInt(DownVote);

    return (
        <tr >
        <th>
            {index+1}
        </th>
        <td>{authorName}</td>
        <td>
            <div className="font-bold">{upVotes+ DownVotes}</div>
        </td>
        
        <td className='text-center'>
            <Link to={`/comments/${_id}`}>
                <MdOutlineComment className='text-2xl'></MdOutlineComment>
            </Link>
        </td>
        <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-ghost bg-red-700 hover:bg-red-600  p-3"><RiDeleteBin6Line className='text-[18px] text-white'></RiDeleteBin6Line></button>
        </th>
        </tr>
    );
};

export default PostsTabel;