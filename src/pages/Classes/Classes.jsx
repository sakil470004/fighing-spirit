import React, { useContext, useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import ClassesCard from '../Shared/ClassesCard';

import { AuthContext } from '../../providers/AuthProvider';
import useRole from '../../hooks/useRole';



const Classes = () => {
    const [classes, setClasses] = useState([])
    const { role } = useRole()
    const { user } = useContext(AuthContext)
    // only accepted are showed here
    const currentStatus = 'accepted';
    useEffect(() => {
        fetch(`http://localhost:5000/classes?status=${currentStatus}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const handleSelect = (singleClass) => {
        const { _id, ...rest } = singleClass
        const newData = { studentEmail: user.email, ...rest }
        // console.log(newData)

        fetch('http://localhost:5000/selectedClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Added')
                    // reset()
                }

            })
    }
    return (
        <div className='my-20'>
            <SectionTittle heading={'All Training Courses'}></SectionTittle>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    classes.map(singleClass => {
                        return (<ClassesCard key={singleClass._id} singleClass={singleClass}>
                            <button onClick={() => handleSelect(singleClass)} disabled={singleClass.availableSeats === 0 || role !== 'student'} className="btn btn-error text-white mt-4">Select Course</button>

                        </ClassesCard>)

                    })
                }
            </div>
        </div>
    );
};

export default Classes;