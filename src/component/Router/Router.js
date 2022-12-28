import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Profile from '../../Content/Profile/Profile';
import Home from '../Home/Home';
import Main from '../Main/Main';

export const Router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
            
        ]
    }
])