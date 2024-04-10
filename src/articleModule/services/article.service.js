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

async function getRestaurantByUserId(userId) {
    try {
        const response = await axiosInstance({
            url: `/api/restaurants/?restaurantOwnerId=${userId}`,
            headers: { "Authorization": localStorage.getItem('accessToken') },
        });
        localStorage.setItem("restaurantId", response.data[0]._id);
        return response.data[0]._id;
    } catch (error) {
        alert(error);
    }

}

export async function addArticle(name, price, description, imageUrl, isMenu) {
    try {
        let response;
        let userId = localStorage.getItem("userId");
        let restaurantId = await getRestaurantByUserId(userId);
        let productIdList = localStorage.getItem("productIdList");
        productIdList = productIdList.split(',');
        if (isMenu && (productIdList.length === 0)) {
            throw new Error("Vous devez ajouter des produits à votre menu.")
        }
        if (isMenu) {
            response = await axiosInstance({
                method: "POST",
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
        } else {
            let ingredientList = [];
            let allergenList = [];
            response = await axiosInstance({
                method: "POST",
                url: `/api/articles/products/`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    name,
                    price,
                    description,
                    imageUrl,
                    restaurantId,
                    ingredientList,
                    allergenList,
                }
            });
        }
        alert("Article ajouté !");
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export async function getArticleData(id, isMenu) {
    try {
        let url = isMenu ? `/api/articles/menus/${id}` : `/api/articles/products/${id}`;
        const response = await axiosInstance({
            url: url,
            headers: { "Authorization": localStorage.getItem('accessToken') },
        });
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export async function getProductsByRestaurantId() {
    try {
        let restaurantId = await getRestaurantByUserId(localStorage.getItem("userId"));
        try{
            const response = await axiosInstance({
                url: `/api/articles/products/restaurant/${restaurantId}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
            });
            return response.data;
        } catch (error){
            alert("Vous devez créer des articles avant de créer un menu !");
        }
    } catch (error) {
        alert(error);
    }
}

export async function updateArticle(name, price, description, imageUrl, id, isMenu) {
    try {
        let response;
        let allergenList = [];
        let ingredientList = [];
        let userId = localStorage.getItem("userId");
        let restaurantId = await getRestaurantByUserId(userId);
        let productIdList = localStorage.getItem("productIdList");
        productIdList = productIdList.split(',');
        if (isMenu && (productIdList.length === 0)) {
            throw new Error("Vous devez ajouter des produits à votre menu.")
        }
        if (isMenu) {
            response = await axiosInstance({
                method: "PUT",
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
        } else {
            response = await axiosInstance({
                method: "PUT",
                url: `/api/articles/products/${id}`,
                headers: { "Authorization": localStorage.getItem('accessToken') },
                data: {
                    name,
                    price,
                    description,
                    imageUrl, 
                    restaurantId,
                    allergenList,
                    ingredientList,
                }
            });
        }
        alert("Modifications enregistrées !");
        return response.data;
    } catch (error) {
        alert(error);
    }
}