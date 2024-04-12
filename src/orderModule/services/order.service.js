import axiosInstance from "../../utils/constants/axios";

export const getOrders = (queryParams={}) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: '/api/orders', 
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

export const createOrders = (data) => {
    return new Promise(async(res, rej) => {
        try {
            console.log(data);
            const response = await axiosInstance({
                method: "POST",
                url: '/api/orders', 
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data
            });
            res(response.data.id);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const abortOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/abort`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const userPayedOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/client-validate`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const restaurantCheckOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/restaurant-checked`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const deliverymanCheckOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/deliveryman-checked`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const restaurantPreparedOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/prepared`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const deliverymanDeliveredOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/prepared`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getOrdersById = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/api/orders/${id}`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response.data);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const deleteOrders = (id) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "DELETE",
                url: `/api/orders/${id}`, 
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const putOrders = (id,data) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "PUT",
                url: `/api/orders/${id}`, 
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const patchOrders = (id,data) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "PATCH",
                url: `/api/orders/${id}`, 
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

