import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true 
})
const UseAxiosSecure = () => {
   
    // const {logOut}= useContext(AuthContext);
    // const navigate= useNavigate();

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}` ;
        console.log('request stopped by interceptors');
        return config;
    }, function (error) {
        
        return Promise.reject(error);
      }),


      /// Intercepts 401 and 403 status
      axiosSecure.interceptors.response.use(function(response){
          return response;
        }, async(error)=>{
            
            const status = error.response.status;
            console.log('status errro in the interceptor',status);

            // for 401 403 logout the user and move to the login page
            // if(status === 401 || status === 403){
            //     await logOut();
            //     navigate('/login')
            // }
        return Promise.reject(error);

      });
    return axiosSecure ;
};

export default UseAxiosSecure;