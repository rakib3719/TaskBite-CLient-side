import { MdAssignment } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"
import { useContext, useState } from "react";
import { imageUpload } from "../../../utlitis/photoUpload";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import useGetUser from "../../../hook/useGetUser";
import ButtonLoader from "../../../component/loader/ButtonLoader";


const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date())
    const {user} = useContext(AuthContext);
    const [userData, refetch,, ] = useGetUser()
    const [addLoader, setAddLoader] = useState(false) 
    const userEmail = user?.email
    

    const axisoSecure = useAxiosSecure();

    const decreaseCoin = async updatedCoin =>{

await axisoSecure.put('/userCoin', {updatedCoin, userEmail})
refetch()

    }

const addTaskHandle =async e => {

setAddLoader(true)
e.preventDefault();
const form = e.target;
const title = form.title.value;
const task_Detail = form.detail.value;
const quantity = form.quantity.value;
const payable_amount = form.payable_amount.value;
const img = form.image.files[0];
const task_info = form.info.value;


const cost = quantity * payable_amount;
const availableCoin = userData?.coin;


if(cost > availableCoin){

toast.error("Not available Coin.Please Purchase Coin");
setAddLoader(false)
return;

}

try{
    const task_img = await imageUpload(img)
    const completion_date = startDate.toLocaleDateString();
    const creator_name = user?.displayName;
    const creator_email = user?.email;

    
    
    
    
    const taskInfo = {
    
    title,
    task_Detail,
    quantity,
    payable_amount,
    task_img,
    task_info,
    completion_date,
    creator_name,
    creator_email,
  
    
    
    }
    

    
    
    console.log(taskInfo);
    
    
    const {data} = await axisoSecure.post('/addTask', taskInfo);
    console.log(data);
    
    
    if(data.insertedId){
    
        const updatedCoin = availableCoin - cost;
    
        decreaseCoin(updatedCoin)
        toast.success("Task added succesfully")
        setAddLoader(false)
    }
    

}catch(error){
    toast.error(error.message)
    setAddLoader(false)
}






}


    return (
        <div >
          <div className="bg-[#362417] mt-12 rounded-md">
<Toaster></Toaster>
<div className="p-4 sm:p-12">

    <div className="add-form-bg  bg-gray-500 rounded  border  mx-auto p-4 md:p-8 ">
        <div className="text-center flex justify-center gap-2 items-center">
            <h1 className="text-xl sm:text-2xl  font-bold  font-raleway   text-white ">Add A New Task</h1> <MdAssignment className="text-white" />
        </div>
        <form className="font-poppoins"  onSubmit={addTaskHandle} >

            <div className="md:flex gap-8 mt-8">

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text  text-white font-semibold">Task Title</span>

                    </div>
                    {/* 1 */}
                    <input required type="text" name="title" placeholder="Type here Task title" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
                    <div className="label">

                    </div>
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white font-semibold">Task Details
                        </span>

                    </div>
{/* 2 */}
                    <textarea required name="detail" placeholder="Type here task Detail" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]">

                    </textarea>

                    <div className="label">

                    </div>
                </label>

            </div>








            <div className="md:flex gap-8 mt-4">


                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white font-semibold">Task Quantity</span>

                    </div>
                    {/* 3 */}
                    <input type="number" required name="quantity" placeholder="Type here Quantity" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
                    <div className="label">

                    </div>
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white font-semibold"> Papayable Amount</span>

                    </div>

                    {/* <select required name="" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

                        <option value="easy"> Easy </option>
                        <option value="medium"> Medium</option>
                        <option value="hard"> Hard</option>

                    </select> */}
  <input type="number" required name="payable_amount" placeholder="Type here Payable Amount" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
                    <div className="label">

                    </div>
                </label>

            </div>


            <div className="md:flex gap-8 mt-4">


                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white font-semibold"> Task Image</span>

                    </div>

                    {/* <input required type="text" name="photo" placeholder="Type here Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" /> */}
                    <input
                required
                type='file'
              
                name='image'
                accept='image/*'
className="p-2 mt-2 "


              />


                    <div className="label">

                    </div>
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white font-semibold">  Completion Date</span>

                    </div>

                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]"/>
              

                    <div className="label">

                    </div>
                </label>

            </div>

            <div className="md:flex gap-8 mt-8">


<label className="form-control w-full ">
    <div className="label">
        <span className="label-text text-white font-semibold">Submission Info
        </span>

    </div>
{/* 2 */}
    <textarea required name="info" placeholder="Type here task Info" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]">

    </textarea>

    <div className="label">

    </div>
</label>

</div>



            <div className="flex justify-end">
               {

!addLoader ?  <button className=" text-white font-raleway  px-4 bg-[#573c28] font-bold mt-8  py-2   rounded"><input type="submit" value="Add Task" /></button> :  <button className=" text-white font-raleway  px-4 bg-[#573c28] font-bold mt-8  py-2   rounded">

<ButtonLoader></ButtonLoader>

</button>

               }
            </div>
        </form>
    </div>
</div>
</div>
        </div>
    );
};

export default AddTask;