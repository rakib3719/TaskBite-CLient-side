import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdAddTask } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";
const CreatorMenu = () => {
    return (
        <div>
               <nav>
              {/* Statistics */}
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
                to='addTask'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <MdAddTask className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add new Tasks </span>
              </NavLink>
              {/* My Listing */}
              <NavLink
                to='myTask'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <VscFileSubmodule className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Task’s</span>
              </NavLink>
              <NavLink
                to='myTask'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <GiTwoCoins className='w-5 h-5' />

                <span className='mx-4 font-medium'>Purchase Coin
</span>
              </NavLink>
              <NavLink
                to='paymentHistory'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <FaHistory className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment history
</span>
              </NavLink>
            </nav>  
        </div>
    );
};

export default CreatorMenu;