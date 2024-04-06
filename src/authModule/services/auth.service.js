import axiosInstance from "../../utils/constants/axios";

export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('http://localhost:80/api/auth/login', {
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
        const response = await axiosInstance.post('http://localhost:80/api/auth/register', {
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

export const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
}