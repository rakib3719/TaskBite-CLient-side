import { useContext } from "react";
import { FaCoins } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { AuthContext } from "../../provider/AuthProvider";
import useGetUser from "../../hook/useGetUser";


const DashbordMenu = () => {
    const [userData, refetch] = useGetUser()
    const {user} = useContext(AuthContext)
    return (
        <div>
           <div className="text-right fixed  w-full right-0 border-r-2 bg-gray-800 border-yellow-400 flex items-center gap-12 justify-between md:justify-end text-white border-b-2 border-t-0 ml-32 p-4">
            <div className="sm:flex gap-8 mr-12 justify-end items-center">
                <div className="flex  gap-8 justify-end items-center">
                    <div className="relative ">
                    <div className="badge bg-yellow-400 text-gray-800 font-bold py-1 px-3 rounded-full ml-2">{userData?.coin}</div>
                    <p className="ml-2">
                            <FaCoins className="text-gold text-xl" />
                        </p>
                        
                        <p className="text-lg font-semibold">Admin</p>
                    </div>
                 
                </div>
                <div className="flex flex-col items-end">
                  
                    <img
                        alt="User Profile"
                        src={user?.photoURL}
                        className="rounded-full w-12 h-12 border-2 border-yellow-400"
                    />
                    <p className="text-gray-400 text-center">{user?.displayName || "Anonymous"}</p>
                </div>
            </div>
            <div>
                <p className="flex items-center gap-2 text-xl">
                    <IoIosNotifications className="text-yellow-400 text-2xl" /> Notification
                </p>
            </div>
        </div>  
        </div>
    );
};

export default DashbordMenu;