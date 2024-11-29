import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever, MdVisibility } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageTask = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const { data: taskAll = [], refetch } = useQuery({
        queryKey: ['allTaskForAdminRoute', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/task/${user?.email}`);
            return response.data;
        }
    });

    const handleViewTask = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    

    const taskDelete = async(id)=>{

        try{

 
 
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
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
            axiosSecure.delete(`taskDeleteAdmin/${id}`)
            .then(result=> {
            if(result.data.deletedCount
            ){
                   Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
            }
            })
            .catch(error =>{
                toast.error(error.message)
            })

                }
              });


        }catch(err){
            toast.error(err.message)
        }
    }

    return (
        <div className="p-4">
            <Toaster></Toaster>
            <h1 className="text-center font-bold font-raleway text-xl md:text-3xl mt-8 mb-8">Manage Task</h1>
            <div className="overflow-x-auto">
                <table className="table-xs table w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border border-gray-300">#</th>
                            <th className="p-2 border border-gray-300">Task Title</th>
                            <th className="p-2 border border-gray-300">Creator Name</th>
                            <th className="p-2 border border-gray-300">Task Quantity</th>
                            <th className="p-2 border border-gray-300">Coin Needed</th>
                            <th className="p-2 border border-gray-300">Availability</th>
                            <th className="p-2 border border-gray-300">View Task</th>
                            <th className="p-2 border border-gray-300">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskAll.map((data, idx) => (
                            <tr key={data._id} className="hover:bg-gray-50">
                                <td className="p-2 border border-gray-300 text-center">{idx + 1}</td>
                                <td className="p-2 border border-gray-300">{data.title}</td>
                                <td className="p-2 border border-gray-300">{data.creator_name}</td>
                                <td className="p-2 border border-gray-300 text-center">{data.quantity}</td>
                                <td className="p-2 border border-gray-300 text-center">{data.quantity * data.payable_amount}</td>
                                <td className="p-2 border border-gray-300 text-center">{ data.quantity > 0 ? "Available" : "Not Available"
}</td>
                                <td className="p-2 border border-gray-300 text-center">
                                    <buttonp
                                        onClick={() => handleViewTask(data)}
                                        className="bg-[#0bb990] hover:bg-[#234a7f] text-white py-1 px-2 rounded flex items-center justify-center"
                                    >
                                        <MdVisibility className="mr-1" /> View Task
                                    </buttonp>
                                </td>
                                <td  onClick={()=> taskDelete (data._id)} className="p-2 border border-gray-300 text-center">
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded flex items-center justify-center">
                                        <MdDeleteForever className="mr-1" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedTask && (
                <div className="fixed inset-0 w-full overflow-auto flex items-center  justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg lg:max-w-2xl relative">
                        
                        {selectedTask.task_img && (
                            <div className="mb-4 mt-96">
                                <img
                                    src={selectedTask.task_img}
                                    className=" max-w-[600px] max-h-[600px]  object-cover rounded"
                                    alt="Task"
                                />
                            </div>
                        )}
                        <h2 className="text-2xl font-bold mb-4">Task Details</h2>
                        <p><strong>Creator Email:</strong> {selectedTask.creator_email}</p>
                        <p><strong>Completion Date:</strong> {selectedTask.completion_date}</p>
                        <div className="mb-4">
                            <label className="block font-bold mb-1">Task Detail:</label>
                            <textarea
                                value={selectedTask.task_Detail}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold mb-1">Submission Details:</label>
                            <textarea
                                value={selectedTask.submission_Details}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageTask;
