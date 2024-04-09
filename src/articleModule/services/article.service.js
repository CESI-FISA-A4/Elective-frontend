import axiosInstance from "../../utils/constants/axios";

export async function getProductsList() {
    let restaurantId = getRestaurantByUserId(localStorage.getItem("userId"));  
    try {
        const response = await axiosInstance({
            url: `/api/articles/products/restaurant/${restaurantId}`,
            headers: { "Authorization": localStorage.getItem('accessToken') },
        });
        return response.data;
    } catch (error) {
        alert(error);
    }
}


async function getRestaurantByUserId(userId){
    try {
        const response = await axiosInstance({
            url: `/api/restaurants/${userId}`,
            headers: { "Authorization": localStorage.getItem('accessToken') },
        });
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
            response = await axiosInstance({
                method : "POST",
                url: `/api/articles/menus/`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    name,
                    price,
                    restaurantId,
                    description,
                    imageUrl,
                    productIdList
                }
            });        
        }else{
            response = await axiosInstance({
                method : "POST",
                url: `/api/articles/products/`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    name,
                    price,
                    description,
                    imageUrl
                }
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
        const response = await axiosInstance({
            url: `/api/articles/${id}`,
            headers: { "Authorization": localStorage.getItem('accessToken') },
        }); 
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export async function updateArticle(name, price, description, imageUrl, id, isMenu){
    try {
        let response;
        let userId = localStorage.getItem("userId");
        let restaurantId = getRestaurantByUserId(userId);
        let productIdList = localStorage.getItem("productIdList") ? JSON.parse(localStorage.getItem("productList")) : [];
        if (productIdList.length === 0 && isMenu) {
            throw new Error("Vous devez ajouter des produits à votre menu.")
        }
        if (isMenu) {       
            response = await axiosInstance({
                method : "PUT",
                url: `/api/articles/menus/${id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    name,
                    price,
                    restaurantId,
                    description,
                    imageUrl,
                    productIdList
                }
            }); 
        }else{
            response = await axiosInstance({
                method : "PUT",
                url: `/api/articles/product/${id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    name,
                    price,
                    description,
                    imageUrl
                }
            }); 
        }
        alert("Modifications enregistrées !");
        return response.data;
    } catch (error) {
        alert(error);
    }
}