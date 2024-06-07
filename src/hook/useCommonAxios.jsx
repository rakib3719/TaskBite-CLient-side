import axios from "axios";

const commonAxios = axios.create({
    baseURL: 'https://task-bite-server-side.vercel.app',


  })
const useCommonAxios = () => {
    return commonAxios;
};

export default useCommonAxios;