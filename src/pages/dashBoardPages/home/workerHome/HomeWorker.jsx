import { FaCoins, FaDollarSign, FaTasks } from "react-icons/fa";
import useGetUser from "../../../../hook/useGetUser";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import RingLoading from "../../../../component/loader/RingLoading";

const HomeWorker = () => {
  const [userData] = useGetUser();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // total submission
  const { data: totalSubmission = 0 , isLoading:load} = useQuery({
    queryKey: ['totalSubmission', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/totalSubmission/${user?.email}`);
      return response.data;
    }
  });

  // get approved submissions
  const { data: approvedSubmissionData = [], isLoading } = useQuery({
    queryKey: ['approvedSubmissionData', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`approvedData/${user?.email}`);
      return res.data;
    }
  });

  // const totalEarning = approvedSubmissionData.reduce((prev, curr) => prev + curr.payable_amount, 0);
const allAmount = approvedSubmissionData.map(data => parseInt(data.payable_amount));
const totalEarn = allAmount.reduce((prev, curr)=> prev + curr, 0)

if(load || isLoading){
  return <RingLoading></RingLoading>
}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-bold text-3xl mt-8 mb-8 text-gray-700">Stats</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <FaCoins className="text-4xl text-yellow-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{userData?.coin}</h2>
            <p className="text-gray-500">Available Coins</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <FaTasks className="text-4xl text-blue-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{totalSubmission?.count}</h2>
            <p className="text-gray-500">Total Submissions</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <FaDollarSign className="text-4xl text-green-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{totalEarn}</h2>
            <p className="text-gray-500">Total Earning</p>
          </div>
        </div>
      </div>

      {/* approved data */}
      <h1 className="text-center font-bold text-3xl mt-8 mb-8 text-gray-700">Approved Submissions</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <div className="min-w-full overflow-hidden">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b">Task Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b">Payable Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b">Creator Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {approvedSubmissionData.map((data, idx) => (
                <tr key={data._id} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors duration-200`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">{data.task_title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">{data.payable_amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">{data.creator_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-b">
                    <span className={`inline-flex px-2 text-xs leading-5 font-semibold rounded-full ${data.status === 'Approved' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {data.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeWorker;
