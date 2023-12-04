import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true 
})
const UseAxiosSecure = () => {
    return axiosSecure ;
};

export default UseAxiosSecure;