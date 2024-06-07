import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { FaCoins, FaTasks, FaUser, FaCrown } from 'react-icons/fa';
import useCommonAxios from '../../../hook/useCommonAxios';
import BarsLoading from '../../loader/BarsLoading';

const TopEarnerDetails = ({ user }) => {
    const axiosPublic = useCommonAxios();


    const { data: taskCompletion = {} } = useQuery({
        queryKey: ['taskCompletion'],
        queryFn: async () => {
            const response = await axiosPublic.get(`completion/${user?.email}`);
            return response;
        }
    });

    const totalCompletion = taskCompletion?.data?.count || 0;

    // if (isLoading) {
    //     return (
    //         <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
    //             <div className="flex p-4 space-x-4 sm:px-8">
    //                 <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
    //                 <div className="flex-1 py-2 space-y-4">
    //                     <div className="w-full h-3 rounded bg-gray-300"></div>
    //                     <div className="w-5/6 h-3 rounded bg-gray-300"></div>
    //                 </div>
    //             </div>
    //             <div className="p-4 space-y-4 sm:px-8">
    //                 <div className="w-full h-4 rounded bg-gray-300"></div>
    //                 <div className="w-full h-4 rounded bg-gray-300"></div>
    //                 <div className="w-3/4 h-4 rounded bg-gray-300"></div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="flex flex-col items-center max-w-sm p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="relative mb-4">
                {user?.image_url ? (
                    <img src={user?.image_url} alt="User" className="w-32 h-32 mx-auto rounded-full shadow-md" />
                ) : (
                    <FaUser className="w-32 h-32 mx-auto rounded-full shadow-md p-2 text-gray-400" />
                )}
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                    <FaCrown className="text-yellow-500 w-6 h-6" />
                </div>
            </div>
            <div className="space-y-4 text-center">
                <div className="space-y-2">
                    <p className="text-xl font-medium text-gray-700">
                        Coins Available: <span className="text-yellow-500 font-semibold">{user?.coin}</span>
                    </p>
                    <p className="text-lg font-medium text-gray-700 flex items-center justify-center gap-2">
                        <FaTasks className="text-[#264065 ]" /> Task Completion: {totalCompletion}
                    </p>
                </div>
            </div>
        </div>
    );
};

TopEarnerDetails.propTypes = {
    user: PropTypes.object.isRequired,
};

export default TopEarnerDetails;
