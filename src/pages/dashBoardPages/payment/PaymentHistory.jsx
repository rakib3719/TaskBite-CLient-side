import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import RingLoading from "../../../component/loader/RingLoading";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistory = [], isLoading } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/paymentHistory/${user?.email}`);
            return data;
        }
    });

    if (isLoading) {
        return <RingLoading />;
    }

    console.log(paymentHistory);

    if(paymentHistory.length === 0){
        return <div  className="flex items-center justify-center">
            <h1  className="text-3xl text-center text-red-800"> You are not payment yet </h1>
        </div>
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-center font-bold text-3xl mt-8 mb-8">Payment History</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="table-auto w-full bg-white border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Date and Time</th>
                            <th className="px-4 py-2 border">Processed Coin</th>
                            <th className="px-4 py-2 border">Paid Amount</th>
                            <th className="px-4 py-2 border">TRX</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((data, idx) => (
                            <tr key={data._id} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="px-4 py-2 border text-center">{idx + 1}</td>
                                <td className="px-4 py-2 border text-center">{new Date(data.date).toLocaleString()}</td>
                                <td className="px-4 py-2 border text-center">{data.purcess_coin}</td>
                                <td className="px-4 py-2 border text-center">{data.paid_amount}</td>
                                <td className="px-4 py-2 border text-center">{data.trxId.split('_')[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
