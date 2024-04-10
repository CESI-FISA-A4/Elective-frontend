import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:80',
});

export default axiosInstance;

