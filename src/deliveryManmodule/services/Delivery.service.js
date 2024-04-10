import axiosInstance from "../../utils/constants/axios";

export const GetCodeDelivery = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/api/orders/${id}/delivered`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
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
                url: `/api/orders/${id}/`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}