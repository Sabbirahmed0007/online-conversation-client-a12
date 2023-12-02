import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import {Watch} from 'react-loader-spinner';

const PrivateRoutes = ({children}) => {

    const {user, loading}=UseAuth();

    if(loading){
        return <div className=' text-center flex items-center justify-center w-9/12 mx-auto my-40'><Watch height="80" width="80" radius="48" color="#87CEEB" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/></div> 
    }



    return
};

export default PrivateRoutes;