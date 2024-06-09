import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdSystemUpdateAlt, MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useIncreaseCoin from "../../../hook/useIncreaseCoin";
import RingLoading from "../../../component/loader/RingLoading";
import { useNavigate } from "react-router-dom";




const MyTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [increaseCoin] = useIncreaseCoin();
const navigate = useNavigate()



  const { data: myAllTask = [], refetch, isLoading } = useQuery({
    queryKey: ["myAllTask", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myTask/${user?.email}`);
      return data;
    }
  });

  const deleteHandle = async (id, amount, quantity) => {
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
        axiosSecure.delete(`/deleteTask/${id}`).then(result => {
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

            const saveCost = parseInt(amount) * parseInt(quantity);
            increaseCoin(saveCost);
            refetch();
          }
        });
      }
    });
  };



  // const handleUpdateSubmit = async (event) => {
  //   event.preventDefault();
  //   const { title, detail, submission } = event.target.elements;
  //   const updatedTask = {
  //     title: title.value,
  //     detail: detail.value,
  //     submission: submission.value,
  //   };

  //   await axiosSecure.put(`/updateTask/${currentTask._id}`, updatedTask);
  //   Swal.fire({
  //     title: "Updated!",
  //     text: "Your task has been updated.",
  //     icon: "success"
  //   });
  //   setIsModalOpen(false);
  //   refetch();
  // };

  const sortedTasks = myAllTask;

  if (isLoading) {
    return <RingLoading />;
  }

  if(myAllTask.length === 0){
    return <div  className="flex items-center justify-center">
        <h1  className="text-3xl text-center text-red-800"> You are not add any task </h1>
    </div>
}

  return (
    <div>
      <div>
        <h1 className="text-center font-bold font-raleway text-xl md:text-3xl mt-8 mb-8">Your All Tasks</h1>
        <div className="overflow-x-auto">
          <table className="table table-xs sm:table-sm md:table-md lg:table-lg border border-gray-300">
            <thead>
              <tr>
                <th></th>
                <th>Task Title</th>
                <th>Task Quantity</th>
                <th>Payable Amount</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((data, idx) => (
                <tr key={data._id}>
                  <th>{idx + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.quantity}</td>
                  <td>{data.payable_amount}</td>
                  <td>
                    <button
                  onClick={()=> navigate(`/dashboard/updateTask/${data._id}`)}
                      className="bg-[#264065] rounded py-2 px-2 sm:px-5 m:py-3 text-white btn cursor-pointer"
                     >
                  <div className="flex items-center gap-2 justify-center">
                  <MdSystemUpdateAlt />  <p>Update</p>
                  </div>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteHandle(data._id, data.payable_amount, data.quantity)}
                      className="bg-red-800 rounded py-2 px-2 sm:px-5 sm:py-3 text-white btn cursor-pointer"
                    >
                   <div className="flex items-center justify-center gap-2">

                   <MdDeleteForever /> <span>Delete</span>
                   </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    {/* modal */}

  






    </div>
  );
};

export default MyTask;
