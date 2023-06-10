import React, { useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import ClassesCard from '../Shared/ClassesCard';

const Classes = () => {
    const [classes, setClasses] = useState([])
    // only accepted are showed here
    const currentStatus = 'accepted';
    useEffect(() => {
        fetch(`http://localhost:5000/classes?status=${currentStatus}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div className='my-20'>
            <SectionTittle heading={'All Training Courses'}></SectionTittle>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    classes.map(singleClass => {
                        return( <ClassesCard key={singleClass._id} singleClass={singleClass}>

                            <button className="btn btn-error text-white mt-4">Select Course</button>

                        </ClassesCard>)

                    })
                }
            </div>
        </div>
    );
};

export default Classes;