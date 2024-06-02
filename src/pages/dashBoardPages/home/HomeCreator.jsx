import { FaCoins, FaDollarSign, FaTasks } from "react-icons/fa";
import useGetUser from "../../../hook/useGetUser";
import ReviewRequests from "./ReviewRequests";


const HomeCreator = () => {
const [userData, refetch, isLoading] = useGetUser()


    return (
        <div>
   <div className="bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
  <h2 className="text-2xl font-bold text-white text-center">Dashboard</h2>
  <div className="bg-gray-700 p-2 rounded-lg shadow-md">
    <div className="flex items-center space-x-2">
      <FaCoins className="text-yellow-400" />
      <p className="text-gray-300">Coins: {userData.coin}</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaTasks className="text-blue-400" />
      <p className="text-gray-300">Pending Tasks: 0</p>
    </div>
    <div className="flex items-center space-x-2">
      <FaDollarSign className="text-green-400" />
      <p className="text-gray-300">Total Payment: $0</p>
    </div>
  </div>
</div>


    <ReviewRequests></ReviewRequests>
        </div>
    );
};

export default HomeCreator;