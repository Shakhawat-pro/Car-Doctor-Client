import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import "./NavStyles.css"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
const NavBar = () => {
    const {user, logOut} = useContext((AuthContext))
    const handleLogOut = () =>{
        logOut()
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
            user?.email && <li><NavLink to="/bookings">Booking</NavLink></li>
        }
    </>
    return (
        <div className="lg:container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-transparent border-2 hover:border-2 hover:border-[#FF3811] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF3811]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="  dropdown-content p-5 mt-3 z-[1] space-y-5  shadow bg-base-100 border-2 border-[#FF3811] rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/"><p className="btn btn-ghost hover:bg-transparent text-xl"><img src={logo}></img></p></Link>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" space-x-4 menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {user?  <button onClick={handleLogOut}  className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Log Out</button>
                          :<Link to="/login"><button className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">LogIn</button></Link>

                     }
                    <a className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;