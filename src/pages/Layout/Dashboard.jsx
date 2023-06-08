import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashbaord = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        sssss
        <label htmlFor="my-drawer-2" className="btn btn-error drawer-button lg:hidden absolute top-4 left-4">|||</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* admin */}
          <li><NavLink to={'/dashboard/manageUsers'}>Manage Users</NavLink></li>
          <li><NavLink to={'/dashboard/manageAddedCourses'}>Manage Added Courses</NavLink></li>
          {/* instructor */}
          <li><NavLink to={'/dashboard/addedCourses'}>Added Courses</NavLink></li>
          <li><NavLink to={'/dashboard/manageCourses'}>Manage Courses</NavLink></li>
          {/* student */}
          <li><NavLink to={'/dashboard/selectedCourse'}>Selected Course</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashbaord;