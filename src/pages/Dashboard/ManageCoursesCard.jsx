import React from 'react';

const ManageCoursesCard = ({ course, index ,newChange}) => {
    const { name,
        price,
        image,
        instructorName,
        availableSeats,
        _id, status
    } = course
    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteCourse/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 1) {
                newChange?.setChange(!newChange?.change)
                    alert('deleted')
                }
            })
    }
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{price}</td>
            <td>
                {instructorName}
            </td>
            <td>
                {availableSeats}
            </td>
            <td>
                <p className={`badge text-white ${status === 'accepted' ? 'badge-success' : 'badge-error'}`}>{status}</p>
            </td>
            <td><button className='badge badge-error text-white' onClick={handleDelete}>Delete</button> <button className='badge badge-info text-white'>Edit</button></td>
        </tr>
    );
};

export default ManageCoursesCard;