import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import {  FaUsers } from 'react-icons/fa';
import UseAuth from '../../../Hooks/UseAuth';
import UseAdmin from '../../../Hooks/UseAdmin';
import Swal from 'sweetalert2';

const AdminHome = () => {
    const {user}= UseAuth();
    const [isAdmin]= UseAdmin();

    const axiosSecure = UseAxiosSecure();

    const {data: stats=[], }= useQuery({
        queryKey: ['adminStats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/adminStats');
            return res.data;
        }
    });

    const handleAddTags =e=>{
        e.preventDefault();
        const form = e.target;
        const tagName = form.tags.value;
        const color = form.color.value;

        const data ={tagName, color};
        console.log(data);

        axiosSecure.post('/tags', data, {withCredentials:true})
        .then(res =>{
            // console.log(res.data);
            if(res.data.insertedId){
                Swal.fire('','Tag has been added successfully', 'success');
            }
        })
        .catch(error=>{
            console.error(error);
        })

    }

    return (
        <div>
            <h2 className='text-center my-3 font-bold text-2xl'>Welcome to the Admin Dashboard</h2>
            <div>
                {/* Admin info */}

                    <div className='w-2/3 mx-auto flex flex-col lg:flex-row items-center lg:justify-around gap-4 my-10 shadow-md p-5'>
                        <img src={user.photoURL} alt="" className='rounded-full'/>
                        <div>
                        <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                        <h2 className='font-bold'>{user.email}</h2>
                        </div>
                    </div>
                
            </div>
            <div className='w-9/12 mx-auto flex items-center gap-6 justify-around drop-shadow-xl'>
                <div>
                    <p className="stat-title text-xl font-bold text-blue-300 uppercase">Users </p>
                    <div className='drop-shadow-lg flex items-center gap-3'>
                        <FaUsers className="text-3xl"></FaUsers>
                        <h2 className='stat-value'>{stats?.users}</h2>
                    </div>
                </div>
                <div>
                    <p className="stat-title text-xl font-bold text-blue-300 uppercase">Posts </p>
                    <div className='drop-shadow-lg flex items-center gap-3'>
                        <h2 className='stat-value'>{stats?.posts}</h2>
                    </div>
                </div>
                
            </div>
                <div className=' my-10 border border-red-100 w-fit p-3 mx-auto rounded-lg'>
                    <form className='max-w-md mx-auto ' onSubmit={handleAddTags}>
                        <div>
                            <input type="text" name="tags" id=""  className='p-2 bg-green-300 my-2 rounded-lg outline-none' placeholder='Add tags'/><br />
                            <input type="text" name="color" id="" className='p-2 bg-green-300 my-2 rounded-lg outline-none' placeholder='Enter the hax code of color ' required/>
                            <div className='text-center'>
                                <button className='btn btn-accent'>Add tag</button>
                            </div>
                        </div>
                    </form>
                </div>

        </div>
    );
};

export default AdminHome;