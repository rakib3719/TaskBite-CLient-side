import { useContext, useState, useEffect, useRef } from 'react'

import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import { FaCoins } from 'react-icons/fa'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { Link } from 'react-router-dom'

import useGetUser from '../../../hook/useGetUser'
import WorkerMenu from '../menu/WorkerMenu'
import CreatorMenu from '../menu/CreatorMenu'
import AdminMenu from '../menu/AdminMenu'
import { AuthContext } from '../../../provider/AuthProvider'
import NotifyPopUp from '../notificationpopUp/NotifyPopUp'

const Sidebar = () => {
  const [usesrData, refetch, isLoading] = useGetUser()
  const { user } = useContext(AuthContext)
  const [userData] = useGetUser()

  const [isActive, setActive] = useState(false)
  const [isSubMenuActive, setSubMenuActive] = useState(false)

  const subMenuRef = useRef(null)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  // Submenu Toggle Handler
  const handleSubMenuToggle = () => {
    setSubMenuActive(!isSubMenuActive)
  }

  const handleCloseSubMenu = () => {
    setSubMenuActive(false)
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setSubMenuActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [subMenuRef])

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-800  flex w-full justify-between md:hidden">
        <div className="block cursor-pointer p-4 font-bold">
          <Link to="/" className="btn btn-ghost text-white text-xl">
            TaskBite
          </Link>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-600"
        >
          <AiOutlineBars className="h-5 w-5 text-white" />
        </button>
      </div>

      <button
        onClick={handleSubMenuToggle}
        className="bg-gray-800 p-4 text-white md:hidden focus:outline-none focus:bg-gray-600 w-full flex justify-between items-center"
      >
        <span>Menu</span>
        {isSubMenuActive ? <IoMdArrowDropup className="h-5 w-5" /> : <IoMdArrowDropdown className="h-5 w-5" />}
      </button>

      <div
        id="subMenu"
        ref={subMenuRef}
        className={`${
          isSubMenuActive ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out md:hidden bg-gray-900 text-white absolute top-14 left-0 w-full z-20`}
      >
        <div className="px-4 py-2 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaCoins className="text-yellow-500 text-lg mr-2" />
              <span className="text-xl font-bold">{userData?.coin}</span>
            </div>
            <div className="flex items-center">
              <NotifyPopUp></NotifyPopUp>
            </div>
          </div>
        </div>
        <div className="px-4 py-2 border-b border-gray-700">
          <img
            alt="User Profile"
            src={user?.photoURL}
            className="rounded-full w-12 h-12 border-2 border-yellow-400"
          />
          <p className="mt-2 font-semibold">{userData?.role}</p>
          <p className="text-sm">{userData?.name}</p>
        </div>
        <button
          onClick={handleCloseSubMenu}
          className="bg-gray-800 p-4 text-white w-full focus:outline-none focus:bg-gray-600 flex justify-center"
        >
          <AiOutlineClose className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 mt-12 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#072041] w-64 space-y-6 px-4 py-6 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className=''>
          {/* <div className="hidden  w-full px-16 0 md:flex  rounded-lg justify-center items-center mx-auto mb-4">
            <Link to="/" className="btn btn-ghost text-white text-xl">
              TaskBite
            </Link>
          </div> */}

          {/* Nav Items */}
          <div className="flex mt-16 flex-col justify-between flex-1 ">
            {usesrData.role === 'admin' ? (
              <AdminMenu />
            ) : usesrData.role === 'worker' ? (
              <WorkerMenu />
            ) : (
              <CreatorMenu />
            )}
          </div>
        </div>

     
      </div>
    </>
  )
}

export default Sidebar
