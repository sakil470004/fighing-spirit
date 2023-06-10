import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ManageCoursesCard from './ManageCoursesCard';
import SectionTittle from '../Shared/SectionTittle';
import { useQuery } from '@tanstack/react-query';

const ManageCourses = () => {
    const [classes, setClasses] = useState([])
    const [change, setChange] = (false)

    useEffect(() => {
        fetch(`http://localhost:5000/classes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [change])
    // const {data: classes = [], isLoading: loading, refetch} = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async() => {
    //         const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`);
    //         return res.json();
    //     }
    // })
    // if (loading) {
    //     return <p className='text-2xl'>Loading....</p>
    // }
    const newChange={change,setChange}
    return (
        <div className="overflow-x-auto">
            <SectionTittle heading={'Manage Your Course'} subHeading={'Edit Or Delete Course'}></SectionTittle>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Instructor Name</th>
                        <th>Available Seat</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        classes.map(((course, index) => <ManageCoursesCard key={course._id} course={course} index={index} newChange={newChange}></ManageCoursesCard>))
          }
            </tbody>


        </table>
     </div>
    );
};

export default ManageCourses;