import axiosInstance from "../../utils/constants/axios";

export const getAccountById = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                url: `/api/accounts/${id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const updateAccountById = (id, data) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "PATCH",
                url: `/api/accounts/${id}`,
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

export const mentorAccountByCode = (code) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/accounts/mentor/${code}`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const suspendAccountById = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/accounts/${id}/suspend`,
                headers: { "Authorization": localStorage.getItem('accessToken') }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}