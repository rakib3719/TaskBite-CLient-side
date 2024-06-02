
import { useQuery } from '@tanstack/react-query';
import { FaUser, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import RingLoading from '../../loader/RingLoading';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const TaskDetails = () => {


  // Static hardcoded task data
 
const {user} = useContext(AuthContext)
  const id = useParams().id;
  console.log(id);
  const axiosSecure = useAxiosSecure()

  const {data:task={}, isLoading} = useQuery({


    queryKey:['taskDetails'],
    queryFn: async()=>{

const res = await axiosSecure.get(`taskDetails/${id}`)
return res.data


    }
  })
  console.log(task);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const subMissionDetails = event.target.submissionDetails.value
    const submissionData = {
        
      task_id: task._id,
      task_title: task.title,
      task_detail: task.task_Detail,
      task_img_url: task.task_img,
      payable_amount: task.payable_amount,
      worker_email: user?.email,
      submission_details:  subMissionDetails,
      worker_name: user?.displayName,
      creator_name: task.creator_name,
      creator_email: task.creator_email,
      current_date: new Date(),
      status: "pending"
    };

   
try{

    const {data} = await axiosSecure.post('/addSubmission',submissionData );
  
    if(data.insertedId){

        toast.success("Submisson successfully")
    }

}catch(err){

    toast.error(err.message)
}

  };

  if(isLoading){
    return <RingLoading></RingLoading>
  }

  return (
    <div className=" bg-gray-100 flex flex-col items-center sm:p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <Toaster></Toaster>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{task.title}</h2>
        <div className="mb-4">
          <img src={task.task_img} alt="Task" className="w-full h-64 object-cover rounded-md" />
        </div>
        <p className="text-lg text-gray-700 mb-4"> Task Details: {task.task_Detail}</p>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="flex items-center">
              <FaUser className="text-blue-500 text-xl mr-2" />
              <div>
                <p className="text-gray-600">Creator</p>
                <p className="text-gray-800 font-semibold">{task.creator_name}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="flex items-center">
              <FaDollarSign className="text-yellow-500 text-xl mr-2" />
              <div>
                <p className="text-gray-600">Payable Amount</p>
                <p className="text-gray-800 font-semibold">${task.payable_amount}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="flex items-center">
              <FaCalendarAlt className="text-green-500 text-xl mr-2" />
              <div>
                <p className="text-gray-600">Current Date</p>
                <p className="text-gray-800 font-semibold">{task.completion_date
}</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <div className="mb-4">
            <label htmlFor="submissionDetails" className="block text-gray-700 font-semibold mb-2">
              Submission Details
            </label>
            <textarea
              id="submissionDetails"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
          name='submissionDetails'
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
