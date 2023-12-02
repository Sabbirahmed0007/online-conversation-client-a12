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
            {
                path:'notifications',
                element:<Notification></Notification>
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
    }
])

export default Routes;