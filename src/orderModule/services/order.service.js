import axiosInstance from '../../utils/constants/axios';

async function getOrderInfo (orderId) {
    return {
        id :1, 
        status : "En cours",
        totalPrice : 20,
    }
    return await axiosInstance.get(`http://localhost:80/api/orders/${orderId}`);
}

async function getRestaurantInfo (restaurantId) {
    return await axiosInstance.get(`http://localhost:80/api/restaurants/${restaurantId}`);
}

export { getOrderInfo, getRestaurantInfo };