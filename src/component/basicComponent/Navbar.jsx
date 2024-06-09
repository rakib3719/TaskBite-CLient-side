import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useGetUser from "../../hook/useGetUser";
import { FaCoins } from "react-icons/fa";

const Navbar = () => {
  const [userData] = useGetUser();

  const { user, logOut } = useContext(AuthContext);

  const logOutHandle = () => {
    logOut();
  };

  const nav = (
    <>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/registar'>Register</NavLink></li>
    </>
  );

  const loggedNav = (
    <div className="flex font-raleway flex-col lg:flex-row items-center">
      <li>
        <NavLink to={userData.role === "taskCreator" ? "/dashboard/creatorHome" : userData.role === "worker" ? "/dashboard/workerHome" : userData.role === "admin" && "/dashboard/adminHome"}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <span className="btn btn-sm bg-transparent border-none shadow-none">
          <FaCoins className="text-yellow-500" />
          Available Coin <sup className="text-sm badge badge-primary">{  
                            
                            userData.role === "admin" ? "":userData?.coin}</sup>
        </span>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-base-100 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
            {user ? loggedNav : nav}
          </ul>
        </div>
        <NavLink to={'/'} className="btn btn-ghost text-xl">TaskBite</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? loggedNav : nav}
        </ul>
      </div>
      {user ?
        <div className="navbar-end">
          <div className='flex items-center gap-4'>
            <img
              alt='User Profile Photo'
              src={user?.photoURL}
              className="rounded-full w-12 h-12"
            />
            <button onClick={logOutHandle} className='btn font-raleway bg-[#264065] text-white block text-center'>Logout</button>
          </div>
        </div> :  
        <div className="navbar-end">
          <div className='flex items-center gap-4'>
            <button className='btn font-raleway bg-[#264065] text-white block text-center'>
              <a href="https://www.youtube.com/watch?v=YiSQ_db-Dcw&list=PLTSUms4Q9B9dMGKa_ZemhLoA1OKLSYUhC" target="_blank" rel="noopener noreferrer">Watch Demo</a>
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
