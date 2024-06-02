import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useGetUser from "./useGetUser";
import { AuthContext } from "../provider/AuthProvider";


const useIncreaseCoin = () => {
   const [userData, refetch, isLoading] = useGetUser();
   const axiosSecure = useAxiosSecure();
   const {user} = useContext(AuthContext)
   const userEmail = user?.email
    const   increaseCoin= async (addedCoin)=>{
    
const updatedCoin = userData.coin + addedCoin;
 await axiosSecure.put(`/userCoin`, {updatedCoin, userEmail})
refetch()


    }
return [increaseCoin]
};

export default useIncreaseCoin;