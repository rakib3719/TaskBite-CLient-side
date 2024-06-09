import { useQuery } from '@tanstack/react-query';
import { FaUser, FaCalendarAlt, FaDollarSign, FaClock } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import RingLoading from '../../loader/RingLoading';
import { useContext} from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import Countdown from 'react-countdown';

const TaskDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();


  const { data: task = {}, isLoading } = useQuery({
    queryKey: ['taskDetails', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`taskDetails/${id}`);
      return res.data;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const subMissionDetails = event.target.submissionDetails.value;
    const submissionData = {
      task_id: task._id,
      task_title: task.title,
      task_detail: task.task_Detail,
      task_img_url: task.task_img,
      payable_amount: task.payable_amount,
      worker_email: user?.email,
      submission_details: subMissionDetails,
      worker_name: user?.displayName,
      creator_name: task.creator_name,
      creator_email: task.creator_email,
      current_date: new Date().toISOString(),
      status: 'pending',
    };

    try {
      const { data } = await axiosSecure.post('/addSubmission', submissionData);

      if (data.insertedId) {
        toast.success('Submission successful');
        const notificationInfo = {
          toEmail: task.creator_email,
          message: `${user?.displayName} has submitted a task. You can now approve or reject it.`,
          time: new Date().toISOString(),
        };
        createNotification(notificationInfo);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const createNotification = async (notificationInfo) => {
    await axiosSecure.post('/notification', notificationInfo);
  };

  if (isLoading) {
    return <RingLoading />;
  }

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-center items-center space-x-2 text-gray-700 mb-4">
        <div className="flex flex-col items-center bg-gray-100 border border-gray-200 rounded-lg p-2 shadow">
          <span className="text-xl font-bold">{days}</span>
          <span className="text-xs text-gray-500">Days</span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 border border-gray-200 rounded-lg p-2 shadow">
          <span className="text-xl font-bold">{hours}</span>
          <span className="text-xs text-gray-500">Hours</span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 border border-gray-200 rounded-lg p-2 shadow">
          <span className="text-xl font-bold">{minutes}</span>
          <span className="text-xs text-gray-500">Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 border border-gray-200 rounded-lg p-2 shadow">
          <span className="text-xl font-bold">{seconds}</span>
          <span className="text-xs text-gray-500">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center sm:p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <Toaster />
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{task.title}</h2>
        <Countdown date={new Date(task.completion_date)} renderer={renderer} />
        <div className="mb-4">
          <img src={task.task_img} alt="Task" className="w-full h-64 object-cover rounded-md" />
        </div>
        <p className="text-lg text-gray-700 mb-4">Task Details: {task.task_Detail}</p>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="flex items-center">
              <FaUser className="text-[#264065] text-xl mr-2" />
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
                <p className="text-gray-600">Completion Date</p>
                <p className="text-gray-800 font-semibold">{new Date(task.completion_date).toLocaleDateString()}</p>
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#264065]"
              rows="5"
              name="submissionDetails"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1b304f] hover:bg-[#051b3b] text-white py-2 rounded-md transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
