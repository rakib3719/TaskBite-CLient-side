import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import AllTaskCard from "../../../../component/dashBoardComponent/allTakCard/AllTaskCard";
import RingLoading from "../../../../component/loader/RingLoading";


const AllTask = () => {

const axiosSecure = useAxiosSecure()
    const {data: task=[], isLoading} = useQuery({

queryKey:['alltaskList'],
queryFn:  async()=>{

const {data} =await axiosSecure.get('/allTask');
return data;


}

    })

    console.log(task);
    if(isLoading){
        return <RingLoading></RingLoading>
    }

if(task.length === 0){
    return <div  className="flex items-center justify-center">
        <h1  className="text-3xl text-center text-red-800"> No task Available  </h1>
    </div>
}



    return (
        <div  className="grid lg:grid-cols-2  gap-4">
        {
task.map(task => <AllTaskCard
key={task._id}
task={task}


>

</AllTaskCard>)


        }
        </div>
    );
};

export default AllTask;