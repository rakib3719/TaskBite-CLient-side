
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GoTasklist } from "react-icons/go";
import { VscFileSubmodule } from "react-icons/vsc";



const WorkerMenu = () => {
    return (
        <div>
             <nav>
           
              <NavLink
                to='home'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <IoMdHome className='w-5 h-5' />

                <span className='mx-4 font-medium'>Home</span>
              </NavLink>

              {/* Add Room */}
              <NavLink
                to='allTaksList'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <GoTasklist className='w-5 h-5' />

                <span className='mx-4 font-medium'>TaskList</span>
              </NavLink>
              {/* My Listing */}
              <NavLink
                to='submission'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <VscFileSubmodule className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Submissions</span>
              </NavLink>
            </nav>
        </div>
    );
};

export default WorkerMenu;