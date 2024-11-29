import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://task-bite-server-side.vercel.app',
    // baseURL: 'http://localhost:5000',


  })

const useAxiosSecure = () => {


    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext)
axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')

config.headers.authorization = `Bearer ${token}`
return config;

}, function(error){
    return Promise.reject(error)
}

)



axiosSecure.interceptors.response.use(function (response) {
    return response;
}, async (error) => {
    const status = error.response.status;
    // console.log('status error in the interceptor', status);
    // for 401 or 403 logout the user and move the user to the login
    if (status === 401 || status === 400) {
        await logOut();
        navigate('/login');
    }

    if(status===403){
        navigate('/forbidden');
    }
    return Promise.reject(error);
})


    return axiosSecure;
};

export default useAxiosSecure;