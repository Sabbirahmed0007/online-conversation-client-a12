import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import { Watch } from "react-loader-spinner";




const AdminRoutes = ({children}) => {
    const {user, loading}= UseAuth();
    const [isAdmin, isAdminLoading]= UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return  <div className=' text-center flex items-center justify-center w-9/12 mx-auto my-40'><Watch height="80" width="80" radius="48" color="#87CEEB" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/></div>
    }
    
    if(user && isAdmin){
        return children;
    }


   return  <Navigate state={{from: location?.pathname}} to={'/login'} replace></Navigate>
};
    

export default AdminRoutes;