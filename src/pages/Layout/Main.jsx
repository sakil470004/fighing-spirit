import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='mx-2'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />

      </div>
    </div>
  );
};

export default Main;