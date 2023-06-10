import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from './../../assets/logo.png'

const Dashbaord = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content my-0 mx-4">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-error drawer-button lg:hidden absolute top-4 left-4">|||</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content my-2">
          {/* Sidebar content here */}
          <img src={logo} alt="" />
          {/* admin */}
          <li><NavLink to={'/dashboard/manageUsers'}>Manage Users</NavLink></li>
          <li><NavLink to={'/dashboard/manageAddedCourses'}>Manage Added Courses</NavLink></li>
          {/* instructor */}
          <li><NavLink to={'/dashboard/addedCourses'}>Added Courses</NavLink></li>
          <li><NavLink to={'/dashboard/manageCourses'}>Manage Courses</NavLink></li>
          {/* student */}
          <li><NavLink to={'/dashboard/selectedCourses'}>Selected Course</NavLink></li>
          <div className='divider'></div>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/classes'}>Courses</NavLink></li>
          <li><NavLink to={'/instructors'}>Instructors</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashbaord;