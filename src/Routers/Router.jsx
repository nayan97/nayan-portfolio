import React from 'react';
import Layout from '../Layout/Layout';
import Spinner from "../components/Spinner/Spinner";
import Home from "../pages/Home/Home"
import ContactUs from '../pages/page/ContactUs'

import {
    createBrowserRouter,
  } from "react-router";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      hydrateFallbackElement: <Spinner /> ,
      children: [
        {
        //   loader: ()=>fetch('../bd.json'),
          path: "/",
          element : <Home></Home>
         
         },
             {
          path: "contact",
          // loader: ()=>fetch('../blog.json'),
          element: <ContactUs></ContactUs>
         },
     
      ]
  
    }
  ]);