import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "../../../hook/useCommonAxios";
import TopEarnerDetails from "./TopEarnerDetails";



const TopEarners = () => {

const axiosPublic = useCommonAxios()
    const {data:topEarners = [], isLoading} = useQuery({

queryKey:['topEarners'],
queryFn:async ()=>{


    const data = axiosPublic.get('topUser')
    return data;


}

    }) 
const user = topEarners?.data;
if(isLoading){
    return <p>loading....</p>
}
    return (
        <div className="mt-28">
            <h1 className="text-center text-3xl font-bold mb-16">Our Top Earners</h1>
         <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


         {
            user.map(user=>  <TopEarnerDetails
            
            
                user={user}
                key={user._id}
                >
    
    
                </TopEarnerDetails>)
           }
         </div>
        </div>
    );
};

export default TopEarners;