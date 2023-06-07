import React from 'react';

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className='text-center my-10'>
            {subHeading &&<p className='text-gray-500 mb-2'>{subHeading}</p>}
            <h2 className='text-[#EA180B] uppercase text-4xl'>{heading}</h2>
        </div>
    );
};

export default SectionTittle;