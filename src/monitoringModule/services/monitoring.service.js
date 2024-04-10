import axiosInstance from "../../utils/constants/axios";


export const getMonitoring = () => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/monitoring`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}