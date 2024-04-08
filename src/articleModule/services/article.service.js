import axiosInstance from "../../utils/constants/axios";

async function getRestaurantByUserId(userId){
    try {
        console.log("getRestaurantByUserId service reached");
        const response = await axiosInstance.get(`http://localhost:80/api/restaurants/?restaurantOwnerId=${userId}`);
        return response.data[0].id;
    } catch (error) {
        alert(error);
    }

}

export async function addArticle (name, price, description, imageUrl, isMenu) {
    try {
        console.log("addArticle service reached");
        let response;
        let userId = localStorage.getItem("userId");
        let restaurantId = getRestaurantByUserId(userId);
        let productIdList = localStorage.getItem("productIdList") ? JSON.parse(localStorage.getItem("productList")) : [];
        if (productIdList.length === 0) {
            throw new Error("Vous devez ajouter des produits à votre menu.")
        }
        if (isMenu) {
            response = await axiosInstance.post("http://localhost:80/api/articles/menus/", {
                name,
                price,
                restaurantId,
                description,
                imageUrl,
                productIdList
                });        
        }else{
            response = await axiosInstance.post("http://localhost:80/api/articles/products/", {
                name,
                price,
                description,
                imageUrl
                });
        }

        return response.data;
    } catch (error) {
        alert(error);
    }
}

export async function uploadFileToS3(file) {
    let s3Url = "";
    try {
        console.log("uploadFileToS3 service reached");
        const response = await axiosInstance.post(s3Url, {
        file
        });
        let imgUrl = response.data.imgUrl;
        return imgUrl;
    } catch (error) {
        alert(error);
    }
}

export async function getArticleData(id) {
    try {
        console.log("getArticleData service reached");
        const response = await axiosInstance.get(`http://localhost:80/api/articles/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export async function updateArticle(name, price, description, imageUrl, id, isMenu){
    try {
        console.log("updateArticle service reached");
        let response;
        let userId = localStorage.getItem("userId");
        let restaurantId = getRestaurantByUserId(userId);
        let productIdList = localStorage.getItem("productIdList") ? JSON.parse(localStorage.getItem("productList")) : [];
        if (productIdList.length === 0) {
            throw new Error("Vous devez ajouter des produits à votre menu.")
        }
        if (isMenu) {
            response = await axiosInstance.put(`http://localhost:80/api/articles/menus/${id}`, {
                name,
                price,
                restaurantId,
                description,
                imageUrl,
                productIdList
                });        
        }else{
            response = await axiosInstance.put(`http://localhost:80/api/articles/products/${id}`, {
                name,
                price,
                description,
                imageUrl
                });
        }

        return response.data;
    } catch (error) {
        alert(error);
    }
}