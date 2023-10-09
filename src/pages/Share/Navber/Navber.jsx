/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navber = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/allcourse'>Services</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lg:text-base md:text-sm text-xs  lg:font-semibold md:font-medium font-normal ml-6">
                        {links}
                    </ul>
                </div>
                <img className="w-32 h-20" src="/src/assets/444.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:text-base md:text-sm text-xs  lg:font-semibold md:font-medium font-normal">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="avatar online mr-2">
                    <div className="w-10 rounded-full">
                        {user && user.photoURL ? (
                            <img src={user.photoURL} alt="User Profile" />
                        ) : (
                            <div className="avatar offline">
                                <div className="w-10 rounded-full">
                                <img src="/src/assets/user.png" />
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn btn-primary">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navber;