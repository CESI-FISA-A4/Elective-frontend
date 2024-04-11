import axiosInstance from "../../utils/constants/axios";

export const getCommandePreparedDelivery = () => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/orders/prepared`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getCommandePreparedAvailable = () => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/orders/available`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getCommandePreparedCreated = () => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/orders/created`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const PostAbortCommandResto = (id) => {
    return new Promise(async (res, rej) => {
        try {
            // console.log(`/api/orders/${id}/abort`);
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

export const PostRestoOk = (id) => {
    return new Promise(async (res, rej) => {
        try {
            // console.log( `/api/orders/${id}/restaurant-checked`);
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


export const PostDeliveryOk = (id) => {
    return new Promise(async (res, rej) => {
        try {
            // console.log(`/api/orders/${id}/deliveryman-checked`);
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




