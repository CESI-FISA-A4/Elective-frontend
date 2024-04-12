import axiosInstance from "../../utils/constants/axios";

export const getRestaurants = (queryParams = {}) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: '/api/restaurants',
                params: queryParams
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getProductsByRestaurantId = (restaurantId) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/api/articles/products/restaurant/${restaurantId}`,
                headers: localStorage.getItem("accessToken")
            });
            console.log(response.data)
            res(response.data);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getMenusByRestaurantId = (restaurantId) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/api/articles/menus/restaurant/${restaurantId}`,
                headers: localStorage.getItem("accessToken")
            });
            res(response.data);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}



export const searchRestaurantsByName = (name) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance.post('/api/restaurants/search', { name });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getRestaurantById = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance.get(`/api/restaurants/${id}`);
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const createRestaurant = (data) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/api/restaurants`,
                data,
                headers: { "Authorization": localStorage.getItem('accessToken') },
            });

            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const updateRestaurantById = (id, data) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "PATCH",
                url: `/api/restaurants/${id}`,
                data,
                headers: { "Authorization": localStorage.getItem('accessToken') },
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const deleteRestaurantById = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "DELETE",
                url: `/api/restaurants/${id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getRestaurantStats = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/api/statistics/orders/restaurant/${id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getOrders = (id) => {
    return new Promise(async (res, rej) => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/api/orders/`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                params: { restaurantid: id }
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}