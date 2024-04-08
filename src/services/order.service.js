import axiosInstance from "../axios";

export async function getOrderDetails (index) {
    try {
        console.log("Order service reached");
        let url = "http://localhost:80/api/order" + index ;  
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        alert(error);
    }
}