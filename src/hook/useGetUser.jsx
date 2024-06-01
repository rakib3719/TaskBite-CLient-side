import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useGetUser = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
   const{data: userData = {}, refetch, isLoading} = useQuery(

{

queryKey:['usersGet', user?.email],
queryFn:  async()=>{

    const {data} = await axiosSecure.get(`user/${user?.email}`);
    return data;


}

}

   )

   return [userData, refetch, isLoading]



};

export default useGetUser;