import React from 'react';
import UseAuth from '../../../../Hooks/UseAuth';

const MyProfile = () => {
    const {user}= UseAuth();
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>welcome mr. <span>{user.displayName} in your profile</span></h1>
        </div>
    );
};

export default MyProfile;