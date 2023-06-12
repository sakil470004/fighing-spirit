import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Services from './Services';
import ContactUs from './ContactUs';
const Home = () => {
  return (
    <div  >
      <Slider ></Slider>
      <PopularClasses ></PopularClasses>
      <PopularInstructors ></PopularInstructors>
      <Services />
      <ContactUs/>
    </div>
  );
};

export default Home;