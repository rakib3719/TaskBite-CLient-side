import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";


const Notification = () => {

const {user} = useContext(AuthContext)
const axiosSecure = useAxiosSecure()
    const {data: notifyData=[]} = useQuery({
        queryKey:['notification', user?.email],
        queryFn: async()=>{
const res =await axiosSecure(`/notification/${user?.email}`);
return res;



        }
    })
const data = notifyData?.data;
if(!data){
    return <div className="absolute top-16 right-4 w-64 bg-white text-gray-800 rounded shadow-lg p-4 z-20">
<p className="py-2 border-b text-left border-gray-300">..................</p>

    </div>     
}
    return (
        <div className="absolute top-16 right-4 w-64 bg-white text-gray-800 rounded shadow-lg p-4 z-20">
        <p className="text-lg text-left font-semibold">Notifications</p>
        <ul>

{
    data.map((data, idx) =>  <li
    
    key={idx}
    data={data}
    className="py-2 border-b text-left border-gray-300">{data?.
        message}</li>)
}
          
         
        </ul>
    </div>
    );
};

export default Notification;