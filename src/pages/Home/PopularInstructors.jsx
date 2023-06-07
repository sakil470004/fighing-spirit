import React, { useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination ,Autoplay} from "swiper";
import InstructorCard from '../Shared/InstructorCard';
import { Link } from 'react-router-dom';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
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
        <div className='my-20 '>
            <SectionTittle heading={'Skilled Trainer'} subHeading={'Meet Our Highly Skilled Instructor!'}></SectionTittle>
            <Swiper
                loop={true}
                slidesPerView={windowWidth > 1000 ? 3 : 1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    reverseDirection: true,
                }}
                modules={[FreeMode, Pagination,Autoplay]}
                className="mySwiper"
            >
                {
                    instructors.map(instructor => <SwiperSlide key={instructor.id}>
                        <InstructorCard instructor={instructor}></InstructorCard>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className="card-actions  justify-center py-6">
                <Link to={'/courses'} className="btn btn-error text-white">Show All Trainer </Link>
            </div>
        </div>
    );
};

export default PopularInstructors;