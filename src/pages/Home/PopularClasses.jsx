import React, { useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='my-10'>
            <SectionTittle heading={'Popular Courses'} subHeading={'Course You May Find Interesting'}></SectionTittle>
            <Swiper
             loop={true}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                {
                    classes.map((class)=><SwiperSlide>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default PopularClasses;