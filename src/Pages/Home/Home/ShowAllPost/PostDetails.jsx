import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const {data}= useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>Post Details</h2>
        </div>
    );
};

export default PostDetails;