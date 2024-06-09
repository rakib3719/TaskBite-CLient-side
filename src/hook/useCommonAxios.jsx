import axios from "axios";

const commonAxios = axios.create({
    // baseURL: 'https://task-bite-server-side.vercel.app',
    baseURL: 'http://localhost:5000',

  })
const useCommonAxios = () => {
    return commonAxios;
};

export default useCommonAxios;