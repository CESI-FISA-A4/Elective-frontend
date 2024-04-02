import axios from "axios";

export const submitContact = async (firstname, lastname, email, message, role, ) => {
    try {
        console.log("submitContact service reached");
        const response = await axios.post("http://localhost:80/api/contact", {
        firstname,
        lastname,
        email,
        message,
        role
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}