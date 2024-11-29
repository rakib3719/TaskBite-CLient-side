import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import RingLoading from "../../../component/loader/RingLoading";
import { FaUserShield, FaTasks, FaUserTie } from 'react-icons/fa';
import { MdDelete, MdUpdate } from 'react-icons/md';
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const ManageUsers = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: allWorkerUser = [], isLoading, refetch } = useQuery({
        queryKey: ['allWorkerUser', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/workerUser/${user?.email}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <RingLoading />;
    }

    // notification
    const createNotification = async(notificationInfo)=>{
        await axiosSecure.post('/notification', notificationInfo);
       
       }

const updateRole = (email, role, name)=>{


    if(role === "worker"){
        toast.error(`${name} is already an worker`)
        return;
    }

const updatedInfo = {
    email,
    role
}


Swal.fire({
    title: "Do you want to Update role of this user?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No!!`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

axiosSecure.put('/updateUser', updatedInfo)
.then(result => {
    if(result.data.modifiedCount> 0){
      Swal.fire(`${name} Now an ${role}`, "", "success");
      const notificationInfo = {

        toEmail: email,
        message: `An admin update your role  worker to ${role}`,
        time: new Date()
      }
      createNotification(notificationInfo)
      refetch()
    }
})
.catch(error=>{
  toast.error(error.message)
})
    } else if (result.isDenied) {
      Swal.fire("Update role action cencelled", "", "info");
    }
  });


}


const deleteUser = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`deleteUser/${email}`)
          .then(response => {
            // Access the data property of the response
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Successfully deleted this user",
                icon: "success"
              });
              const notificationInfo = {

                toEmail: email,
                message: `An admin Remove you from taskBite`,
                time: new Date()
              }
              createNotification(notificationInfo)

              refetch()
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the user",
                icon: "error"
              });
            }
          })
          .catch(error => {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user: " + error.message);
          });
      }
    });
  };
  
  // Ensure toast is properly
  



    return (
        <div className="p-4">
            <Toaster></Toaster>
            <div className="overflow-x-auto min-h-[400px]">
                <table className="table-xs table relative w-full text-left border-collapse border border-gray-300">
                    {/* Table Header */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 p-2">#</th>
                            <th className="border border-gray-300 p-2">Photo</th>
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Email</th>
                            <th className="border border-gray-300 p-2">Role</th>
                            <th className="border border-gray-300 p-2">Coin</th>
                            <th className="border border-gray-300 p-2">Remove</th>
                            <th className="border border-gray-300 p-2">Update Role</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {allWorkerUser.map((data, idx) => (
                            <tr key={data._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2">{idx + 1}</td>
                                <td className="border border-gray-300 p-2">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data?.image_url} alt="Avatar" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-gray-300 p-2">{data?.name}</td>
                                <td className="border border-gray-300 p-2">{data?.email}</td>
                                <td className="border border-gray-300 p-2">{data?.role}</td>
                                <td className="border border-gray-300 p-2">{data?.coin}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                    
                                    onClick={()=> deleteUser(data?.email)}
                                    className="text-red-500 hover:text-red-700 flex items-center">
                                        <MdDelete className="inline-block mr-1" /> Remove
                                    </button>
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <div className="dropdown z-50 dropdown-end relative">
                                        <div tabIndex={0} role="button" className="btn btn-outline m-1 flex items-center gap-1">
                                            <MdUpdate /> Update role
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content  menu absolute z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li  
                                            
                                        onClick={()=> updateRole (data.email, "admin", data?.name)}
                                            ><a className="flex items-center gap-2"><FaUserShield /> Admin</a></li>
                                            <li    onClick={()=> updateRole (data.email, "taskCreator", data?.name)} ><a className="flex items-center gap-2"><FaTasks /> Task Creator</a></li>
                                            <li
                                            
                                            onClick={()=> updateRole (data.email, "worker",data?.name)}
                                            ><a className="flex items-center gap-2"><FaUserTie /> Worker</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
