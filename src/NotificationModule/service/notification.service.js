import axiosInstance from "../../utils/constants/axios"

export const getCommandeStates = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/orders/{id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}