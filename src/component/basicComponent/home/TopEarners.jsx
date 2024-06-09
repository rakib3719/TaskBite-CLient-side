import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "../../../hook/useCommonAxios";
import TopEarnerDetails from "./TopEarnerDetails";
import RingLoading from "../../loader/RingLoading";
import { Zoom } from "react-awesome-reveal";



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
    return <RingLoading></RingLoading>
}

if(topEarners === null){
    return <h1>No user Available</h1>}




    return (
        <div className="mt-28 font-raleway">
            <h1 data-aos="fade-down" data-aos-duration={1200} className="text-center text-3xl font-bold mb-16 ">Our Top Earners</h1>
        <Zoom duration={3000}>

        <div   className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


{
user.map(user=>  <TopEarnerDetails
   
   
       user={user}
       key={user._id}
       >


       </TopEarnerDetails>)
  }
</div>
        </Zoom>
        </div>
    );
};

export default TopEarners;