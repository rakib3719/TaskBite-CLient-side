import { FaCoins, FaDollarSign, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import RingLoading from "../../../component/loader/RingLoading";
import { AiOutlineCheckCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import Swal from "sweetalert2";



const AdminHome = () => {




const axiosSecure = useAxiosSecure();

const {data: stateData = {}, isLoading} = useQuery({

    queryKey:['adminStates'],
    queryFn: async()=>{
        const res =await axiosSecure.get(`adminStatesInfo`);
        return res.data
    }
})

const totalUsers = stateData?.totalUsers;
const totalCoin = stateData?.totalCoin || [];
const totalPayments = stateData?.paidAmounts || [];

const totalCoinSum = totalCoin.reduce((prev, curr)=> prev + curr , 0) ;
const totalPaymentsSum = totalPayments.reduce((prev, curr)=> prev + curr , 0)  ;



const {data: withdrawInfo = [], isLoading:load, refetch} = useQuery({

queryKey:['withdrawInfo'],
queryFn:async()=>{

const response = await axiosSecure.get('withdrawRequest');
return response.data;

}
})


const withDrawOparation = async (id, coin, workerEmail) => {
  console.log(coin, workerEmail);
  
  const info = {
    workerEmail,
    coin
  };

  try {
    const data = await axiosSecure.put('/updateCoin', info);
    console.log(data.data);

    if(data.data.modifiedCount > 0){

await axiosSecure.delete(`/deleteWithdrawList/${id}`)
refetch()

        Swal.fire({
    title: "Payment Sucess!",

    icon: "success"
  });
    }
  } catch (error) {
    console.error('Error updating coin:', error);
  }
};


const withDrawAction = async(id, coin, workerEmail)=>{


try{


Swal.fire({
title: "Are you sure?",
text: "are you sure payment this amount",
icon: "question",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Payment"
}).then((result) => {
if (result.isConfirmed) {
  // Swal.fire({
  //   title: "Payment Sucess!",

  //   icon: "success"
  // });
  withDrawOparation(id, coin, workerEmail)
}
});



}catch(error){
toast.error(error.message)
}

}


if(isLoading || load){
    return <RingLoading></RingLoading>
}

    return (
        <div>
 <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-bold text-3xl mt-8 mb-8">States</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <FaUsers className="text-4xl text-[#264065 ]" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{totalUsers}</h2>
            <p className="text-gray-500">Total Users</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <FaCoins className="text-4xl text-yellow-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{totalCoinSum}</h2>
            <p className="text-gray-500">Total Coin</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <FaDollarSign
           className="text-4xl text-green-500" />
          <div className="text-right">
            <h2 className="text-2xl font-bold">{totalPaymentsSum}</h2>
            <p className="text-gray-500">Total Payment</p>
          </div>
        </div>
      </div>
    </div>

    <h1 className="text-center font-bold text-3xl mt-8 mb-8">Withdraw Request</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table-xs lg:table-sm table w-full bg-white border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Worker Name</th>
              <th className="px-4 py-2 border"> Withdraw Coin
</th>
       
              <th className="px-4 py-2 border"> Withdraw Amount</th>
              <th className="px-4 py-2 border">Payment Number</th>
              <th className="px-4 py-2 border"> Payment System</th>
              <th className="px-4 py-2 border"> Withdraw Time
</th>
              <th className="px-4 py-2 border"> Success
</th>
            </tr>
          </thead>
          <tbody>
            {withdrawInfo.map((data, idx) => (
              <tr key={data._id} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2 border text-center">{idx + 1}</td>
                <td className="px-4 py-2 border text-center">{data?. worker_name}</td>
                <td className="px-4 py-2 border text-center">{data?.withdraw_coin
}</td>
                <td className="px-4 py-2 border text-center">{data?.
withdraw_amount
}</td>
                <td className="px-4 py-2 border text-center">{data?.payment_number}</td>
                <td className="px-4 py-2 border text-center">
                  {data?.payment_system
}
                </td>
                <td className="px-4 py-2 border text-center flex justify-center">
                 {data?.widthdraw_time.toLocaleString()}
                  
                </td>

                <td>

                <button onClick={()=>withDrawAction(data?._id,  data?.withdraw_coin, data?.worker_email,
)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l flex items-center w-32"
              
                  >
                    <AiOutlineCheckCircle className="mr-2" /> Success
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


        </div>
    );
};

export default AdminHome;