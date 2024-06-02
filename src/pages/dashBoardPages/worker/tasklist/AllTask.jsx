import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import AllTaskCard from "../../../../component/dashBoardComponent/allTakCard/AllTaskCard";


const AllTask = () => {

const axiosSecure = useAxiosSecure()
    const {data: task=[]} = useQuery({

queryKey:['alltaskList'],
queryFn:  async()=>{

const {data} =await axiosSecure.get('/allTask');
return data;


}

    })

    console.log(task);

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