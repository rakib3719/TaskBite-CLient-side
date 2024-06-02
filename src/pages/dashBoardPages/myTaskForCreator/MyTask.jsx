import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useIncreaseCoin from "../../../hook/useIncreaseCoin";


const MyTask = () => {


    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [increaseCoin] = useIncreaseCoin()
    

   

    const {data: myAllTask = [], refetch, isLoading} = useQuery({


        queryKey:["myAllTask", user?.email],
        queryFn: async ()=>{
const {data} =await axiosSecure.get(`/myTask/${user?.email}`)
return data;



        }
    })



    const deleteHandle = async (id, amount, quantity)=>{
        console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           

          axiosSecure.delete(`/deleteTask/${id}`)
          .then(result => {

           if(result.data.deletedCount > 0){

   Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });


              const saveCost = parseInt(amount) * parseInt(quantity);

              increaseCoin(saveCost)


              refetch()

           }
          })
       
          


            }
          });


        
    }

    console.log(myAllTask);

    return (
        <div>
  <div>

<h1 className="text-center font-bold font-raleway text-xl md:text-3xl mt-8 mb-8">Your all Task</h1>
 <div className="overflow-x-auto">
<table className="table  table-xs sm:table-sm md:table-md lg:table-lg border border-gray-300 ">
{/* head */}
<thead>
<tr>
<th></th>
<th> Task Title</th>
<th>Task Quantity</th>
<th>Payable Amount,</th>
<th>Update</th>
<th>Delete</th>
</tr>
</thead>
<tbody>
{/* row 1 */}


{

myAllTask.map((data, idx) =>  <tr key={data._id}>
  <th>{idx +1}</th>
  <td>{data.title}</td>
  <td>{data.quantity}</td>
  <td>{data.payable_amount}</td>
  {/* <td  className="bg-[#130f40] rounded  py-2 px-2  text-center   sm:px-5 sm:py-3 text-white  btn "> <MdSystemUpdateAlt /> Update </td> */}
  <td>  <p className="bg-[#130f40] rounded  py-2 px-2    sm:px-5 sm:py-3 text-white  btn ">  <MdSystemUpdateAlt /> Update</p> </td>


<td>  <p  onClick={()=> deleteHandle(data._id, data.payable_amount, data.quantity)} className="bg-red-800 rounded  py-2 px-2    sm:px-5 sm:py-3 text-white  btn ">   <MdDeleteForever /> Delete</p> </td>

  
</tr>)
}

</tbody>
</table>
</div>
</div>
        </div>
    );
};

export default MyTask;