import axiosInstance from "../../utils/constants/axios";

export const getOrdersFromStatus = (queryParams={}) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: '/api/statistics/orders', 
                headers: { "Authorization": localStorage.getItem('accessToken') },
                params: queryParams
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getOrdersStats = () => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: '/api/statistics/orders/count', 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getOngoingIncome = () => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: '/api/statistics/orders/ongoing-income', 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}