import React from 'react';
import {  FaUsers } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ManageUsersList = ({user, index, handleDelete, handleMakeAdmin}) => {
    const {_id, name, email}= user;

    return (
        <tr >
        <th>
            {index+1}
        </th>
        
        <td>
            <div className="font-bold">{name}</div>
        </td>
        <td><div className="text-sm opacity-50">{email}</div></td>
        <td>
            { user?.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(_id)} className='btn p-2 bg-[#D1A054] hover:bg-[#d4b17d]'>
                <FaUsers className='text-white mx-2'></FaUsers>
            </button>}
        </td>
        <td></td>
        <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-ghost bg-red-700 hover:bg-red-600  p-3"><RiDeleteBin6Line className='text-[18px] text-white'></RiDeleteBin6Line></button>
        </th>
    </tr>
    );
};

export default ManageUsersList;