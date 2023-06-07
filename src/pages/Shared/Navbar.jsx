import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { FaRegUserCircle } from 'react-icons/fa';
const Navbar = () => {
    const navElement = <>
        <li><NavLink className='ml-4' to={'/'}>Home</NavLink></li>
        <li><NavLink className='ml-4' to={'/courses'}>Courses</NavLink></li>
        <li><NavLink className='ml-4' to={'/instructors'}>Instructors</NavLink></li>
        <li><NavLink className='ml-4' to={'/dashboard'} >Dashboard</NavLink></li>

    </>
    return (
        <div className="navbar bg-red-50 px-4 m-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navElement}
                    </ul>
                </div>
                <NavLink to={'/'} ><img src={logo} width={100}  alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navElement}
                </ul>
            </div>
            <div className="navbar-end">
                <p className="text-3xl"><FaRegUserCircle /></p>
            </div>
        </div>
    );
};

export default Navbar;