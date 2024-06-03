import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { AiOutlineEye, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaCoins, FaDollarSign, FaTasks } from "react-icons/fa";
import useGetUser from "../../../hook/useGetUser";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const HomeCreator = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const { data: allPendingData = [], refetch } = useQuery({
    queryKey: ['allPendingData', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allPendingData/${user?.email}`);
      return res.data;
    }
  });


const [userData] = useGetUser()


// 
const updateCoin = async(workerEmail, upCoins)=>{

  const upCoin = parseInt(upCoins)
 await axiosSecure.put("workerCoinUpdate", {
workerEmail,
upCoin,


  })



}

// update status



const updateStatus = async(id, status, workerEmail, upCoin)=>{

const {data} =await axiosSecure.put(`updateStatus/${id}`, {status});
console.log(data);
if(data.modifiedCount> 0){
  if(status === "approved"){

updateCoin(workerEmail, upCoin)

  }
    Swal.fire({
        title: "Sucess",
        text: `Successfuly ${status}`,
        icon: "success"
      });


   
      
refetch()
}


}

  const handleViewSubmission = (submission) => {
    setSelectedSubmission(submission);
  };

  const handleApprove =async (id, workerEmail, upCoin) => {

try{




  Swal.fire({
    title: "Confirm?",
    text: "Are You sure Approve this submission?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Your file has been deleted.",
      //   icon: "success"
      // });

      updateStatus(id, "approved", workerEmail, upCoin)

     
    }
  });



}catch(err){
  toast.error(err.message)
}

  };





  const handleReject = async(id) => {
  

try{




  Swal.fire({
    title: "Confirm? ",
    text: " Are You sure rejected this submission",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      updateStatus(id, "rejected")
      
    }
  });




}catch(err){
  toast.error(err.message)
}

  };

  return (
    <div className="container mx-auto px-4 py-8">


<div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-bold text-3xl mt-8 mb-8">States</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <FaCoins className="text-4xl text-yellow-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{userData?.coin}</h2>
            <p className="text-gray-500">Available Coins</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <FaTasks className="text-4xl text-blue-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{allPendingData.length}</h2>
            <p className="text-gray-500">Pending Tasks</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <FaDollarSign className="text-4xl text-green-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">$45</h2>
            <p className="text-gray-500">Total Payment</p>
          </div>
        </div>
      </div>
    </div>

      <h1 className="text-center font-bold text-3xl mt-8 mb-8">Task To Review</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full bg-white border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Task Title</th>
              <th className="px-4 py-2 border">Worker Name</th>
              <th className="px-4 py-2 border">Worker Email</th>
              <th className="px-4 py-2 border">Payable Amount</th>
              <th className="px-4 py-2 border">View Submission</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {allPendingData.map((data, idx) => (
              <tr key={data._id} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2 border text-center">{idx + 1}</td>
                <td className="px-4 py-2 border text-center">{data.task_title}</td>
                <td className="px-4 py-2 border text-center">{data.worker_name}</td>
                <td className="px-4 py-2 border text-center">{data.worker_email}</td>
                <td className="px-4 py-2 border text-center">{data.payable_amount}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    className="bg-purple-600 rounded py-2 px-4 text-white flex items-center justify-center w-32"
                    onClick={() => handleViewSubmission(data)}
                  >
                    <AiOutlineEye className="mr-2" /> View
                  </button>
                </td>
                <td className="px-4 py-2 border text-center flex justify-center">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l flex items-center w-32"
                    onClick={() => handleApprove(data._id, data.worker_email, data.payable_amount)}
                  >
                    <AiOutlineCheckCircle className="mr-2" /> Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r flex items-center w-32"
                    onClick={() => handleReject(data._id)}
                  >
                    <AiOutlineCloseCircle className="mr-2" /> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
{/* modal  */}
      {selectedSubmission && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Submission Details</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{selectedSubmission.submission_detail}</p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  onClick={() => setSelectedSubmission(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCreator;
