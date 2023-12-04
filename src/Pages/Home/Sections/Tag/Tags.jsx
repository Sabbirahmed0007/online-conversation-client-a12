import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPublic from '../../../../Hooks/UseAxiosPublic';
import Taglist from './Taglist';

const Tags = () => {
    const axiosPublic = UseAxiosPublic();

    const {data: tags=[]}= useQuery({
        queryKey: ['tags'],
        queryFn: async()=>{
           const res= await axiosPublic.get('/tags');
           console.log(res.data);
           return res.data;
        }
    })


    return (
        <div className='flex items-center justify-center flex-wrap gap-2 my-2'>
            <h2 className='font-bold text-red-500'>Tags:</h2>
            {tags.map(tag=><Taglist key={tag._id} tag={tag}></Taglist>)}
        </div>
    );
};

export default Tags;