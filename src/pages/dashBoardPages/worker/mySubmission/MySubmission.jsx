import { useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import RingLoading from "../../../../component/loader/RingLoading";

const MySubmission = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: totalSubmissionCount = 0, isLoading: load } = useQuery({
    queryKey: ['totalSubmission', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/totalSubmission/${user?.email}`);
      return response;
    }
  });

  const [currentPage, setCurrentPage] = useState(0);
  const totalData = totalSubmissionCount?.data?.count ?? 0;
  const perPageData = 6;
  const paginationNumber = Math.max(Math.ceil(totalData / perPageData), 1);

  const { data: submissionData = [], isLoading } = useQuery({
    queryKey: ['mySubmissionData', user?.email, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`mySubmissionData/${user?.email}?currentPage=${currentPage}&limit=${perPageData}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <RingLoading />;
  }

  if (submissionData.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-3xl text-center text-red-800">You have not submitted any tasks</h1>
      </div>
    );
  }

  const pageNumbers = [...Array(paginationNumber).keys()];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center font-bold text-3xl mb-8 text-gray-800">My Submission</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payable Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creator Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissionData.map((data, idx) => (
              <tr key={data._id} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{idx + 1 + currentPage * perPageData}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{data.task_title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(data.current_date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${data.payable_amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{data.creator_name}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                  data.status === 'pending' ? 'text-yellow-500 bg-yellow-100' :
                  data.status === 'approved' ? 'text-green-500 bg-green-100' :
                  data.status === 'rejected' ? 'text-red-500 bg-red-100' :
                  'text-gray-500 bg-gray-100'
                }`}>
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 mx-1 rounded-md text-sm font-medium ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              {page + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MySubmission;
