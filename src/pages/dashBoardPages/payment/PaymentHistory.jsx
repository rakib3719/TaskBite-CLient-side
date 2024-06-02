import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import RingLoading from "../../../component/loader/RingLoading";


const PaymentHistory = () => {
const {user} = useContext(AuthContext);
const axiosSecure = useAxiosSecure()
const {data: paymentHistory = [], isLoading} = useQuery({


    queryKey:['paymentHistory', user?.email],
    queryFn:async ()=>{

const {data} = await axiosSecure.get(`/paymentHistory/${user?.email}`)
return data;

    }
}) 

if(isLoading){

<RingLoading></RingLoading>

}
console.log(paymentHistory);

    return (
        <div>
  <div>

<h1 className="text-center font-bold font-raleway text-xl md:text-3xl mt-8 mb-8">Payment History</h1>
 <div className="overflow-x-auto">
<table className="table  table-xs sm:table-sm md:table-md lg:table-lg border border-gray-300 ">
{/* head */}
<thead>
<tr>
<th></th>
<th> Date and time</th>
<th>Purcessed Coin</th>
<th>Paid Amount</th>
<th>TRX</th>

</tr>
</thead>
<tbody>
{/* row 1 */}


{

paymentHistory.map((data, idx) =>  <tr key={data._id}>
  <th>{idx +1}</th>
  <td>{new Date(data.date).toLocaleString()}</td>
  <td>{data.purcess_coin
}</td>
  <td>{data.paid_amount
}</td>
  {/* <td  className="bg-[#130f40] rounded  py-2 px-2  text-center   sm:px-5 sm:py-3 text-white  btn "> <MdSystemUpdateAlt /> Update </td> */}
  <td> {data.trxId.split('_')[1]} </td>




  
</tr>)
}

</tbody>
</table>
</div>
</div>
        </div>
    );
};

export default PaymentHistory;