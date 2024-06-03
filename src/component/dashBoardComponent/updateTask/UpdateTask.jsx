
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import {  FaSave } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast, { Toaster } from 'react-hot-toast';

const UpdateTask = () => {
    const {user} = useContext(AuthContext)
    const id = useParams().id;
    console.log(id);
    const axiosSecure = useAxiosSecure()


    const {data: taskInfo= {}} = useQuery({


        queryKey:['taskinfoUpdated', user?.email],
        queryFn:async()=>{
const res = await axiosSecure.get(`/getTask/${id}`)
return res.data;

        }
    })

    console.log(taskInfo);
const updateHandle = async e =>{
    e.preventDefault()
const title = e.target.title.value;
const task_Detail = e.target.detail.value;
const submission_Details = e.target.submission.value;

const updatedTasknfo = {
    title,
    task_Detail,
    submission_Details
}
console.log(updatedTasknfo);

try{

const {data} =await axiosSecure.put(`updateTask/${id}`, updatedTasknfo);
if(data.modifiedCount > 0){
    toast.success('Update successfully')
}

}catch(err){
    toast.error(err.message)
}


}

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <Toaster></Toaster>
            <h2 className="text-2xl font-bold mb-6 text-center text-[#573c28]">Update Task</h2>
            <form   onSubmit={updateHandle}>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        defaultValue={taskInfo.title}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Task Detail</label>
                    <textarea
                        name="detail"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        defaultValue={taskInfo.task_Detail}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Submission Details</label>
                    <textarea
                        type="text"
                        name="submission"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        defaultValue={taskInfo.submission_Details}
                    />
                </div>
                <div className="flex justify-end space-x-3">
                   
                    <button
                        type="submit"
                        className="flex items-center bg-[#573c28] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        <FaSave className="mr-2" />
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;
