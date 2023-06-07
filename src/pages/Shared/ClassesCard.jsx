import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClassesCard = ({ singleClass }) => {
    const { name,
        price,
        image,
        instructorName,
        availableSeats
    } = singleClass
    const navigate = useNavigate()
    const handleDetails = () => {
        navigate(`/toyDetails/${_id}`)
    }
    return (
        <div data-aos="flip-right" className="card card-compact h-[650px] bg-base-100 shadow-xl my-2">
            <figure><img className='object-cover' src={image} alt="fight" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor : {instructorName}</p>
                <div className='flex justify-between '>
                    <span className='text-xl text-rose-500'><span className='text-black'>Price :</span> {price}</span>
                    <span className='text-xl text-[#EA180B]'>{availableSeats} <span className='text-black'>Seats Available</span></span>
                </div>
                {/* <div className="card-actions justify-end">
                    <button onClick={handleDetails} className="btn btn-error text-white">View Details</button>
                </div> */}
            </div>
        </div>
    );
};

export default ClassesCard;