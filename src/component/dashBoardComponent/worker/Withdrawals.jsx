
import { useContext, useState } from 'react';
import useGetUser from '../../../hook/useGetUser';
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import 'animate.css';

const Withdrawals = () => {
    const [userData] = useGetUser()
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
 
    const [withdrawAmount, setWithdrawAmount] = useState(0);
   

    const handleCoinsChange = (e) => {
        const coinValue = e.target.value;

        setWithdrawAmount(coinValue / 20);
    };

    const handleSubmit = async e => {
        e.preventDefault();
     


       try{
        const worker_email = user?.email;
        const worker_name = user?.displayName;
        const withdraw_coin = e.target.coin.value;
        const payment_system = e.target.paymentSystem.value;
        const withdraw_amount = e.target.amount.value;
        const widthdraw_time = new Date();
        const payment_number = e.target.acNumber.value;


        if(withdrawAmount > userData.coin / 20){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Your Maximum Withdrawal Amount ${(userData.coin / 20).toFixed(2)} Dollar`,
               
              });
              return;
        }
        const withdrawInfo = {
            worker_email,
            worker_name,
           withdraw_amount,
           withdraw_coin,
           payment_system,
           widthdraw_time,
           payment_number

        }

 const {data} = await axiosSecure.post('withDraw', withdrawInfo);
if(data.insertedId){

    Swal.fire({
        title: "Withdraw request successfully sent",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}

        console.log(withdrawInfo);


       }catch(err){

        toast.error(err.message)

       }
    };

    return (
        <div className="container gap-12 bg-gray-200 flex-col lg:flex-row flex mx-auto items-center px-4 py-8">

<Toaster></Toaster>


      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg px-8 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaDollarSign className="mr-2 text-green-500" />
          Withdraw System
        </h2>
        <p className="text-gray-600 flex items-center">
          <AiOutlineInfoCircle className="mr-2 text-blue-500" />
          1 Dollar = 20 Coins
        </p>
        <div className="mt-4">
          <p className="text-xl text-gray-700"> Your Total Coins: {userData.coin}</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">
            Your Maximum Withdrawal Amount: <span className='text-yellow-600'> ${(userData.coin / 20).toFixed(2)}</span>
          </p>
        </div>
      </div>
  

            <div className="lg:mt-12 w-full mx-auto bg-white p-8 rounded-lg shadow-md">



                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="coinToWithdraw" className="block text-gray-700 font-bold mb-2">Coins to Withdraw</label>
                        <input 
                        required
                            type="number" 
                            id="coinToWithdraw" 
                        name='coin'
                            onChange={handleCoinsChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>

                    
                    <div className="mb-4">
                        <label htmlFor="withdrawAmount" className="block text-gray-700 font-bold mb-2">Withdraw Amount</label>
                        <input 
                            type="number" 
                            name='amount'
                            id="withdrawAmount" 
                            value={withdrawAmount}
                            readOnly
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="paymentSystem" className="block text-gray-700 font-bold mb-2">Select Payment System</label>
                        <select 
                        required
                            id="paymentSystem" 
                         name='paymentSystem'
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select...</option>
                            <option value="bkash">Bkash</option>
                            <option value="rocket">Rocket</option>
                            <option value="nagad">Nagad</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="accountNumber" className="block text-gray-700 font-bold mb-2">Account Number</label>
                        <input 
                        required
                            type="number" 
                            id="accountNumber" 
                         name='acNumber'
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Withdraw
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Withdrawals;