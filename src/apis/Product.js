import axios from "axios";
import { BASE_URL } from "./constant";

const instance = axios.create({
    baseURL: BASE_URL + "/products",
    headers: {
        "Content-Type": "application/json"
    }
});

const ProductAPI = {
    getAll: config => {
        return instance.get("");
    },

    getById: config => {
        console.log(config);
    },
};

export default ProductAPI;