import React from 'react';
import Navbar from '../components/Navbar'

import { Outlet, useNavigation } from 'react-router';
import Spinner from "../components/Spinner/Spinner";
const Layout = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";
    return (
        <>
           <div className=''>
              <Navbar></Navbar>
              {isLoading && <Spinner />}
              <Outlet></Outlet>
             
           </div>
            
        </>
    );
};

export default Layout;