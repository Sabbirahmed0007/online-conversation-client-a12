import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPublic from '../../../../Hooks/UseAxiosPublic';
import ShowAllPost from './ShowAllPost';

const AllPost = () => {
    const axiosPUblic = UseAxiosPublic();

    const {data: posts=[]}=useQuery({
        queryKey:['posts'],
        queryFn: async()=>{
            const res = await axiosPUblic.get('/posts')
            console.log(res.data);
            return res.data;
        }
    })
    console.log(posts);

    const {data: count={}}= useQuery({
        queryKey: ['allPosts'],
        queryFn: async()=>{
            const res = await axiosPUblic.get('/allPosts');
            return res.data;
        }
    })
    console.log(count) ;

    return (
        <div className='max-w-md lg:max-w-lg mx-auto shadow-md gap-3 space-y-4 my-10'>
            {
                posts.map(post => <ShowAllPost key={post._id} post={post}></ShowAllPost>)
            }
        </div>
    );
};

export default AllPost;