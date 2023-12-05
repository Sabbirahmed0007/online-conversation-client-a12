import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import MemberShip from '../Pages/MemberShip/MemberShip';
import Notification from '../Pages/Notifications/Notification';
import Login from '../Pages/JoinUs/Login';
import Register from '../Pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome';
import Announcement from '../Pages/Home/Sections/Announcement/Announcement';
import CreateAnnoncement from '../Pages/Home/Sections/Announcement/CreateAnnoncement';
import ManageUser from '../Pages/Dashboard/Admin/ManageUsers/ManageUser';
import Activities from '../Pages/Dashboard/Admin/Activities/Activities';
import MyProfile from '../Pages/Dashboard/User/MyProfile/MyProfile';
import AddPost from '../Pages/Dashboard/User/AddPost/AddPost';
import MyPost from '../Pages/Dashboard/User/MyProfile/MyPost';
import PostDetails from '../Pages/Home/Home/ShowAllPost/PostDetails';
import ShowComments from '../Pages/Home/Home/ShowAllPost/ShowComments';
import AdminRoutes from './AdminRoutes';

const Routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }, 
            {
                path:'membership',
                element:<PrivateRoutes><MemberShip></MemberShip></PrivateRoutes>
            },
            // {
            //     path:'notifications',
            //     element:<Notification></Notification>
            // },
            {
                path:'announcement',

                element: <PrivateRoutes><Announcement></Announcement></PrivateRoutes>
                // element:<Announcement></Announcement>
            },
            {
                path:'postDetails/:id',
                element:<PostDetails></PostDetails>,
                loader:({params})=> fetch(`https://online-conversation-platform-server.vercel.app/postDetails/${params.id}`)
            },
            {
                path:'comments/:id',
                // element:<ShowComments></ShowComments>
                element:<PrivateRoutes><ShowComments></ShowComments></PrivateRoutes>
            }, 

        ]
        
        
    },
    {
        path:'login',
        element:<Login></Login>
    },
    {
        path:'register',
        element:<Register></Register>
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [

            // Admin routes
            {
                path:'adminHome',
                element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes> 
                // element: <AdminHome></AdminHome>
            },
            {
                path:'manageUsers',
                element:<AdminRoutes><ManageUser></ManageUser></AdminRoutes>
                // element:<ManageUser></ManageUser>
            },
            {
                path:'activities',
                // element:<Activities></Activities>
                element:<AdminRoutes><Activities></Activities></AdminRoutes>
            },

            {
                path:'createAnnouncement',
                // element:<CreateAnnoncement></CreateAnnoncement>
                element:<AdminRoutes><CreateAnnoncement></CreateAnnoncement></AdminRoutes> 
            },

            // User Routes
            {
                path:'myProfile',
                // element:<MyProfile></MyProfile>
                element:<PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path:'addPost',
                // element:<AddPost></AddPost>
                element:<PrivateRoutes><AddPost></AddPost></PrivateRoutes>
            },
            {
                path:'myPost',
                element:<PrivateRoutes><MyPost></MyPost></PrivateRoutes>
            },
            
        ]
    }
])

export default Routes;