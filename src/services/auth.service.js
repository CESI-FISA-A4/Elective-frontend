import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
            username,
            password
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const signup = async (username, password, firstname, lastname, roleLabel, address) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/register', {
            username,
            password,
            firstname,
            lastname,
            roleLabel,
            address
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}