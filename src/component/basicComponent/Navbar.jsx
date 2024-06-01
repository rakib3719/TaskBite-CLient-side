import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)


const logOutHandle = ()=>{

  logOut()

}

const nav = <>

<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/login'>Login</NavLink></li>
<li><NavLink  to='/registar' >Register</NavLink></li>
<li><NavLink   to='/youtube' >Watch Demo</NavLink></li>
              

</>

const loggedNav = <div className="flex items-center">

<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/dashboard'> Dashboard
</NavLink></li>
<li><NavLink to='/dashboard'>  Available Coin
</NavLink></li>


</div>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {   
            
            user?loggedNav: nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TaskBite</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {   
            
user?loggedNav: nav}
          </ul>
        </div>
        {

          user && <div className="navbar-end">
     
          <div
           
            className=''
          >
            <div className=' flex items-center gap-4' title=''>
              <img
               
                alt='User Profile Photo'
                src={user?.photoURL}
                className="rounded-full w-12 h-12"
              />


              <button onClick={logOutHandle} className='btn font-raleway bg-[#C24914] text-white block text-center'>Logout</button>
        
            </div>


            
          </div>
        
       
        </div>
        }
      </div>
    );
};

export default Navbar;