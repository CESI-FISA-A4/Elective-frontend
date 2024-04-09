import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost',
});

export default axiosInstance;

