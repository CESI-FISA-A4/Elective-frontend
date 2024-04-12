import axios from 'axios';
import { refreshToken } from '../../authModule/services/auth.service';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:80',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalConfig = error.config;
        if (error.response) {
            if (error.response.status === 401 && !originalConfig._retry && error.response.data.error == "Token not found") {
                originalConfig._retry = true;

                console.log("INTERCEPTOR RESPONSE 401");

                let response = await refreshToken();
                localStorage.setItem("accessToken", response.data.accessToken);

                return axiosInstance(originalConfig);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;

