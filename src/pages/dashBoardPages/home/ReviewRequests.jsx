
import { useState } from 'react';
import Modal from 'react-modal';

const ReviewRequests = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setModalIsOpen(false);
  };

  const handleApprove = (submission) => {
    // Implement approval logic here
    console.log('Approved:', submission);
  };

  const handleReject = (submission) => {
    // Implement rejection logic here
    console.log('Rejected:', submission);
  };

  // Hardcoded static data
  const reviewRequests = [
    {
      worker_name: 'John Doe',
      worker_email: 'john.doe@example.com',
      task_title: 'Task 1',
      payable_amount: 50,
      submission_details: 'Details of the submission for Task 1.',
      status: 'pending',
    },
    {
      worker_name: 'Jane Smith',
      worker_email: 'jane.smith@example.com',
      task_title: 'Task 2',
      payable_amount: 75,
      submission_details: 'Details of the submission for Task 2.',
      status: 'pending',
    },
    {
      worker_name: 'Alice Johnson',
      worker_email: 'alice.johnson@example.com',
      task_title: 'Task 3',
      payable_amount: 60,
      submission_details: 'Details of the submission for Task 3.',
      status: 'pending',
    },
  ];

  return (
    <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white">Review Requests</h2>
      <table className="min-w-full bg-gray-700 text-white rounded-lg">
        <thead>
          <tr className="bg-gray-600">
            <th className="p-4">Worker Name</th>
            <th className="p-4">Worker Email</th>
            <th className="p-4">Task Title</th>
            <th className="p-4">Payable Amount</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviewRequests.map((request, index) => (
            <tr key={index} className="border-t border-gray-600">
              <td className="p-4">{request.worker_name}</td>
              <td className="p-4">{request.worker_email}</td>
              <td className="p-4">{request.task_title}</td>
              <td className="p-4">${request.payable_amount}</td>
              <td className="p-4 space-x-2">
                <button
                  onClick={() => openModal(request)}
                  className="bg-[#264065 ] hover:bg-blue-600 text-white py-1 px-2 rounded"
                >
                  View Submission
                </button>
                <button
                  onClick={() => handleApprove(request)}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        {selectedSubmission && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Submission Details</h2>
            <p className="text-gray-300 mb-4">{selectedSubmission.submission_details}</p>
            <button
              onClick={closeModal}
              className="bg-[#264065 ] hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ReviewRequests;
