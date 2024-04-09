import axiosInstance from "../../utils/constants/axios";

export async function getProductsList() {
    let restaurantId = getRestaurantByUserId(localStorage.getItem("userId"));  
    try {
        const response = await axiosInstance.get(`http://localhost:80/api/articles/products/restaurant/${restaurantId}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}


async function getRestaurantByUserId(userId){
    try {
        const response = await axiosInstance.get(`http://localhost:80/api/restaurants/${userId}`);
        localStorage.setItem("restaurantId", response.data[0].id);
        return response.data[0].id;
    } catch (error) {
        alert(error);
    }

}

export async function addArticle (name, price, description, imageUrl, isMenu) {
    try {
        let response;
        let userId = localStorage.getItem("userId");
        let restaurantId = getRestaurantByUserId(userId);
        let productIdList = localStorage.getItem("productIdList") ? JSON.parse(localStorage.getItem("productList")) : [];
        if (productIdList.length === 0 && isMenu) {
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
        alert("Article ajouté !");
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export async function uploadFileToS3(file) {
    let s3Url = "";
    try {
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
        const response = await axiosInstance.get(`http://localhost:80/api/articles/${id}`);
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
        if (productIdList.length === 0 && isMenu) {
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
        alert("Modifications enregistrées !");
        return response.data;
    } catch (error) {
        alert(error);
    }
}