import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {

    const {user,loading}= UseAuth();
    const axiosSecure = UseAxiosSecure();
    
    const {data: isAdmin, isAdminLoading, isPending,}= useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async()=>{
            if(isAdminLoading){
                return  <div className=' text-center flex items-center justify-center w-9/12 mx-auto my-40'><Watch height="80" width="80" radius="48" color="#87CEEB" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/></div>
            }
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data.admin);
            return res.data.admin ;
        }
    })
    console.log(isAdmin);
    return [isAdmin, isAdminLoading];
};

export default UseAdmin;