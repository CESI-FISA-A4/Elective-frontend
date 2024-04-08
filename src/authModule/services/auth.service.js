import axiosInstance from "../../utils/constants/axios";
import { camelCaseToSentence } from "../../utils/services/utils.service";

export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', {
            username,
            password
        });
        const accessToken = 'Bearer ' + response.data.accessToken;
        const refreshToken = 'Bearer ' + response.data.refreshToken;
        axiosInstance.defaults.headers.common['Authorization'] = accessToken;
        localStorage.setItem('userId', response.data.userId)
        localStorage.setItem('roleLabel', response.data.roleLabel)
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        window.location.href = '/home';
    } catch (error) {
        console.error(error);
    }
} 

export const signup = async (username, password, firstname, lastname, roleLabel, address) => {
    try {
        const response = await axiosInstance.post('/api/auth/register', {
            username,
            password,
            firstname,
            lastname,
            roleLabel,
            address
        });
        if (response.data === "User created successfully") {
            window.location.href = '/login';
        }else{
            alert("Erreur lors de l'inscription");
        }
    } catch (error) {
        console.error(error);
    }
}

export const changePassword = (username, password, newPassword) => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance.post('/api/auth/change-password', {
                username,
                password,
                newPassword,
            });
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    });   
}

export const getRoles = () => {
    return new Promise(async(res, rej) => {
        try {
            const response = await axiosInstance.get('/api/auth/roles');
    
            res(response);
        } catch (error) {
            console.error(error);
            rej(error);
        }
    })
}

export const getRole = () => {
    let roleLabel = localStorage.getItem("roleLabel");

    return camelCaseToSentence(roleLabel);
}

export const isAdmin = () => localStorage.getItem("roleLabel") == "admin";

export const isRestaurantOwner = () => localStorage.getItem("roleLabel") == "restaurantOwner";

export const isDeliveryman = () => localStorage.getItem("roleLabel") == "deleveryman";

export const isTechnician = () => localStorage.getItem("roleLabel") == "technician";

export const isSalesman = () => localStorage.getItem("roleLabel") == "salesman";

export const isDeveloper = () => localStorage.getItem("roleLabel") == "developer";

export const isUser = () => localStorage.getItem("roleLabel") == "user";


export const logout = (path='/login') => {
    localStorage.clear();
    window.location.href = path;
}