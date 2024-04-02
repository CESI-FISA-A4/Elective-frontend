import axios from 'axios';

export const login = async (username, password) => {
    try {
        console.log("login service reached");
        const response = await axios.post('http://localhost:80/api/auth/login', {
            username,
            password
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const signup = async (username, password, firstname, lastname, role) => {
    try {
        console.log("signup service reached");
        const response = await axios.post('http://localhost:80/api/auth/register', {
            username,
            password,
            firstname,
            lastname,
            role
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}