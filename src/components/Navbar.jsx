import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
  const links = <>
    
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#0EA106] font-bold m-2" : "m-2")}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-[#0EA106] font-bold m-2" : "m-2")}
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-[#0EA106] font-bold m-2" : "m-2")}
        >
          <li>Services</li>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "text-[#0EA106] font-bold m-2" : "m-2")} 
        to="/contact"> <li >Contact</li></NavLink>
  </>
    return (
            <div className="shadow-sm bg-[#081b29] text-white">
               <div className='max-w-[1280px] mx-auto'>
                  <div className="navbar">
                    <div className="navbar-start">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                              links
                            }
                  
                        </ul>
                      </div>
                      <a className="text-2xl text-start font-semibold"><span><img className='w-8' src="" alt="" /></span>Nayan Islam</a>
                    </div>
                    <div className="navbar-center hidden lg:flex bg-[#112e42] rounded-full px-6">
                      <ul className="menu menu-horizontal px-1 font-medium text-lg">
                        {
                          links
                        }
                      </ul>
                    </div>
                    <div className="navbar-end">
                      <a 
                      className="bg-green-400 px-5 py-2 rounded-full font-semibold hover:bg-green-300 transition">Resume</a>
                    </div>
                   </div>
                      
              </div>
            </div>
    );
};

export default Navbar;