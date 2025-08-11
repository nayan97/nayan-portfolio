import React from "react";
import Layout from "../Layout/Layout";
import Spinner from "../components/Spinner/Spinner";
import Home from "../pages/Home/Home";
import Services from "../pages/page/Services";
import ContactUs from "../pages/page/ContactUs";
import About from "../pages/page/About";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        //   loader: ()=>fetch('../bd.json'),
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        // loader: ()=>fetch('../blog.json'),
        element: <Services></Services>,
      },
      {
        path: "about",
        // loader: ()=>fetch('../blog.json'),
        element: <About></About>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
