import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import ManageUsersList from './ManageUsersList';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const axiosSecure= UseAxiosSecure();

    const {data:users=[], refetch}= useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            console.log(res.data);
            // refetch();
            return res.data ;
        }
    })


    //// update the user to admin
    const handleMakeAdmin = (id) => {
        console.log('Make admin', id);
    
        Swal.fire({
            title: "Are you sure to make the user admin?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, make admin"
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            const updatedUsers = users.map(user => {
                                if (user._id === id) {
                                    return { ...user, role: 'admin' };
                                }
                                return user;
                            });
                            refetch();
    
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "The user has been promoted to an Admin",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };

    /////// to delete the user from dataabase
    const handleDelete = (id) => {
        console.log('User has been deleted', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                    
                            refetch();
    
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };

    return (
        <div>
 <div className="my-10 shadow-sm drop-shadow-sm bg-white  p-4 rounded-sm w-10/12 mx-auto ">
                <div className="md:text-center font-cinzel flex flex-col md:flex-row  lg:mx-10 justify-between  md:items-center font-extrabold ">
                    <h2 className="text-2xl">All User</h2>
                    <h2 className="text-2xl my-3">Total Users: {users?.length}</h2>
                </div>
                <div className="overflow-x-auto my-6 rounded-t-lg p-2 font-inter">
                    <table className="table overflow-auto">
                    {/* head */}
                        <thead className="bg-fuchsia-500  text-[16px] rounded-t-lg font-bold text-white">
                            <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Subscription Status</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='overflow-auto'>
                            {/* row */}
                          {
                            users.map((user, index)=><ManageUsersList key={user._id} handleDelete={handleDelete} index={index} user={user} handleMakeAdmin={handleMakeAdmin}></ManageUsersList>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;