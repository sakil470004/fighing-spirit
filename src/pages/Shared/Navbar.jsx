import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { FaRegUserCircle } from 'react-icons/fa';
import { CiDark } from 'react-icons/ci';
import { BsLightningCharge } from 'react-icons/bs';
import { AuthContext } from '../../providers/AuthProvider';
const Navbar = () => {

    const { user, logOut, setDark, dark } = useContext(AuthContext);

    const handleChange = (e) => {
        setDark(e.target.checked)
    }
    const handleLogout = () => {
        logOut()
            .then()
    }
    const darkButton = <label className='badge badge-error my-auto select-none flex justify-center items-center'>{dark ? <CiDark/> : <BsLightningCharge/>}
        <input type="checkbox" className="toggle toggle-error border-2 hidden" onChange={handleChange} defaultValue={dark} />
    </label>
    const navElement = <>
        <li><NavLink className='md:ml-4' to={'/'}>Home</NavLink></li>
        <li><NavLink className='md:ml-4' to={'/classes'}>Courses</NavLink></li>
        <li><NavLink className='md:ml-4' to={'/instructors'}>Instructors</NavLink></li>
        <li><NavLink className='md:ml-4' to={'/dashboard/home'} >Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar shadow-md rounded-md px-4 m-0 z-[999999] py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden z-[9999]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[9999]">
                        {navElement}
                        {darkButton}
                    </ul>

                </div>
                <NavLink to={'/'} >{dark ? <div className='text-xl text-error'>Fighting<br></br> Sprit</div> : <img src={logo} width={100} alt="" />}</NavLink>
            </div>
            

                <div className="navbar-center hidden lg:flex my-auto">
                    <ul className="menu menu-horizontal px-1">
                        {navElement}
                    </ul>

                {darkButton}
                </div>
            
            <div className="navbar-end">




                {user ? <div className='flex gap-4 items-center justify-center'>
                    {user?.photoURL ?
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img title={user?.displayName} src={user.photoURL} />
                            </div>
                        </div> :
                        <p title={user?.displayName} className="text-3xl"><FaRegUserCircle /></p>}
                    <button className='btn btn-error btn-outline' onClick={handleLogout}>Logout</button>
                </div>
                    :
                    <Link className='btn btn-error' to={'/login'}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;