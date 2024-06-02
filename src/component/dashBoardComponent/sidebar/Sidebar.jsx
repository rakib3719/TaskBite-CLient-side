import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'


import { AiOutlineBars } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'

import DashbordMenu from '../DashbordMenu'
import useGetUser from '../../../hook/useGetUser'
import WorkerMenu from '../menu/WorkerMenu'
import CreatorMenu from '../menu/CreatorMenu'
import AdminMenu from '../menu/AdminMenu'

const Sidebar = () => {
    const [usesrData, refetch, isLoading] = useGetUser()
  

  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }


  
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
            <a className="btn btn-ghost text-white text-xl">TaskBite</a>
            </Link>
          </div>
          {/* <DashbordMenu  ></DashbordMenu> */}
        </div>
      
        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-600'
        >
          <AiOutlineBars className='h-5 w-5 text-white' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#2E2E2E] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4  rounded-lg justify-center items-center mx-auto'>
            
            <Link to='/'>
            <a className="btn btn-ghost text-white text-xl">TaskBite</a>
            </Link>
            
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

          
     


{

    usesrData.role === "admin"? <AdminMenu></AdminMenu>: usesrData.role ===  "worker"? <WorkerMenu></WorkerMenu> : <CreatorMenu></CreatorMenu>
}

          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
        
            className='flex w-full items-center px-4 py-2 mt-5 text-[#f5f0f0] hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar