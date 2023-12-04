import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import UseAuth from '../../../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import PostsTabel from './PostsTabel';

const MyPost = () => {
    const axiosSecure= UseAxiosSecure();
    const {user }= UseAuth();

    const { data: myposts = [] , refetch} = useQuery({
        queryKey: ['myPosts', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myPosts/${user.email}`);
            console.log(res.data);
            return res.data;
        },
        staleTime: 1000,
    });
    console.log(myposts);


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
                axiosSecure.delete(`/myPosts/${id}`)
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
                    <h2 className="text-2xl"></h2>
                    <h2 className="text-2xl my-3">Total Post: {myposts?.length}</h2>
                </div>
                <div className="overflow-x-auto my-6 rounded-t-lg p-2 font-inter">
                    <table className="table overflow-auto">
                    {/* head */}
                        <thead className="bg-fuchsia-500  text-[16px] rounded-t-lg font-bold text-white">
                            <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Number of Votes</th>
                            <th>Comments</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='overflow-auto'>
                            {/* row */}
                          {
                            myposts.map((post, index)=><PostsTabel key={post._id} handleDelete={handleDelete} index={index} post={post} ></PostsTabel>)
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPost;