import React, { useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";
import ClassesCard from '../Shared/ClassesCard';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      // Update the window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
        <div className='my-10'>
            <SectionTittle heading={'Popular Courses'} subHeading={'Course You May Find Interesting'}></SectionTittle>
            <Swiper
                loop={true}
                slidesPerView={windowWidth>1000 ? 3 : 1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    classes.map(singleClass => <SwiperSlide key={singleClass.id}>
                        <ClassesCard singleClass={singleClass}></ClassesCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default PopularClasses;