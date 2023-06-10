import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClassesCard = ({ singleClass,children  }) => {
    const { name,
        price,
        image,
        instructorName,
        availableSeats,
    } = singleClass
    const navigate = useNavigate()
    const handleDetails = () => {
        navigate(`/toyDetails/${_id}`)
    }
    return  (
        <div  className={`card card-compact h-[650px] ${availableSeats!==0 ?"bg-base-100":"bg-red-200" } shadow-xl my-2 py-4`}>
            <figure><img className='object-cover' src={image} alt="fight" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor : {instructorName}</p>
                <div className='flex justify-between '>
                    <span className='text-xl text-rose-500'><span className='text-black'>Price :</span> {price}</span>
                    <span className='text-xl text-[#EA180B]'>{availableSeats} <span className='text-black'>Seats Available</span></span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ClassesCard;