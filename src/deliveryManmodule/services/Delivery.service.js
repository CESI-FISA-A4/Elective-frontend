import axiosInstance from "../../utils/constants/axios";

export const validateDelivery = (id,data) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/orders/${id}/delivered`,
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

export const GetCommandeById= (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
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