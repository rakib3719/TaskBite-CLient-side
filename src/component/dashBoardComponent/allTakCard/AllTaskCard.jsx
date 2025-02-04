import PropTypes from 'prop-types';
import { FaUser, FaCalendarAlt, FaDollarSign, FaTasks } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AllTaskCard = ({ task }) => {
  const navigate = useNavigate();
  const formattedCompletionDate = new Date(task.completion_date).toLocaleDateString();

  return (
    <div className="lg:max-w-sm w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img
        src={task.task_img}
        alt="task"
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="flex items-center justify-between text-gray-700 mb-4">
          <h1 className="flex items-center gap-2 text-lg font-semibold">
            <FaUser className="text-xl text-[#264065]" /> {task.creator_name}
          </h1>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{task.title}</h1>
        <p className="text-lg text-gray-600 mb-2 italic flex items-center gap-2">
          <FaTasks className="text-xl text-green-500" /> Quantity: {task.quantity}
        </p>
        <p className="text-lg text-gray-600 mb-2 flex items-center gap-2">
          <FaCalendarAlt className="text-xl text-red-500" /> Completion Date: {formattedCompletionDate}
        </p>
        <p className="text-lg text-gray-600 flex items-center gap-2">
          <FaDollarSign className="text-xl text-yellow-500" /> Payable Amount: ${task.payable_amount}
        </p>
        <hr className="my-4 border-gray-300" />
     
       <button onClick={() => navigate(`/dashboard/taskDetails/${task._id}`)} className="w-full bg-[#264065] hover:bg-[#11294a] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors duration-300">
          <MdVisibility className="text-xl" /> View Details
        </button>
      
      </div>
    </div>
  );
};

AllTaskCard.propTypes = {
  task: PropTypes.object.isRequired
};

export default AllTaskCard;
