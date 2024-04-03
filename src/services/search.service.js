import axios from 'axios';

export default async function getRestaurantListe (Name){
    let response = await axios.post(`https://jsonplaceholder.typicode.com/users`, Name )
    console.log(response.data)
    return response.data;
}
