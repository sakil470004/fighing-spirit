import React from 'react';

const SectionTittle = ({heading,subHeading}) => {
    return (
        <div className='text-center my-10'>
          <div className="divider "></div> 
            {subHeading &&<p className='text-gray-500 mb-2 italic'>{subHeading}</p>}
            <h2 className='text-rose-400 font-bold uppercase text-4xl'>{heading}</h2>
            <div className="divider"></div> 
        </div>
    );
};

export default SectionTittle;