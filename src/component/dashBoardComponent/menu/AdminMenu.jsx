import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

import { VscFileSubmodule } from "react-icons/vsc";
import { MdManageAccounts } from "react-icons/md";

const AdminMenu = () => {
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
                to='manageUser'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <MdManageAccounts className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Users
</span>
              </NavLink>
              {/* My Listing */}
              <NavLink
                to=' '
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-[#f5f0f0]'
                  }`
                }
              >
                <VscFileSubmodule className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Task
</span>
              </NavLink>
            </nav> 
        </div>
    );
};

export default AdminMenu;