import React from 'react';
import { useSpring, animated } from '@react-spring/web'
const SectionTittle = ({heading,subHeading}) => {
    const [props, api] = useSpring(
        () => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
        }),
        []
      )
    return (
        <animated.div style={props}>
        <div className='text-center my-10'>
          <div className="divider "></div> 
            {subHeading &&<p className='text-gray-500 mb-2 italic'>{subHeading}</p>}
            <h2 className='text-rose-400 font-bold uppercase text-4xl'>{heading}</h2>
            <div className="divider"></div> 
        </div>
        </animated.div>
    );
};

export default SectionTittle;