import { MdAssignment } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";


const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div >
          <div className="bg-[#362417] mt-12 rounded-md">

<div className="p-4 sm:p-12">

    <div className="add-form-bg  bg-gray-500 rounded  border  mx-auto p-4 md:p-8 ">
        <div className="text-center flex justify-center gap-2 items-center">
            <h1 className="text-xl sm:text-2xl  font-bold  font-raleway   text-white ">Add A New Task</h1> <MdAssignment className="text-white" />
        </div>
        <form className="font-poppoins" >

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
                        <span className="label-text text-white font-semibold"> Task URL</span>

                    </div>

                    {/* <input required type="text" name="photo" placeholder="Type here Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" /> */}


                    
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





            <div className="flex justify-end">
                <button className=" text-white font-raleway  px-4 bg-[#573c28] font-bold mt-8  py-2   rounded"><input type="submit" value="Submit" /></button>
            </div>
        </form>
    </div>
</div>
</div>
        </div>
    );
};

export default AddTask;