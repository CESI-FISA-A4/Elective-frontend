import axiosInstance from "../../utils/constants/axios";

export async function addArticle (name, price, description, img) {
    try {
        console.log("addArticle service reached");
        const response = await axiosInstance.post("http://localhost:80/api/article", {
        name,
        price,
        description,
        img
        });
        return response.data;
    } catch (error) {
        console.error(error);
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
        console.error(error);
    }
}

export default addArticle;