import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
          <div className='mx-2'>
          <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
    );
};

export default Main;