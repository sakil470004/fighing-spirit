import React from 'react';

const MangeUsersCard = ({ user, index }) => {
    const handleRoleChange = (e) => {
        const currentRole = e.target.value;
        const editedRole = { role: currentRole }
        fetch(`http://localhost:5000/adminRole/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedRole)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('role updated')
                }
            })
    }
    const roles = ['student', 'instructor', 'admin']
    return (
        <tr >
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.img} alt={user?.name} />
                    </div>
                </div>

            </td>
            <td>
                {user?.name}
            </td><td>
                {user?.email}
            </td>
            <td>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Change The Role</span>

                    </label>
                    <select onChange={handleRoleChange} className="select select-bordered" defaultValue={user?.role}>
                        {roles.map((demoRole, index) =>
                            <option disabled={demoRole === user?.role} value={demoRole} key={index}>{demoRole}</option>
                        )}
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default MangeUsersCard;