import React from "react";
import Layout from "../Layout/Layout";
import Spinner from "../components/Spinner/Spinner";
import Home from "../pages/Home/Home";
import Services from "../pages/page/Services";
import ContactUs from "../pages/page/ContactUs";
import AboutUs from "../pages/page/AboutUs";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
      
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
       
        element: <Services></Services>,
      },
      {
        path: "about",
        // loader: ()=>fetch('../blog.json'),
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
