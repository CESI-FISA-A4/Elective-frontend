import React from "react";
import DetailsTable from "../DetailsTable/DetailsTable";
import { useParams } from "react-router-dom";
import {getRestaurantInfo, getOrderInfo} from "../../services/order.service";

function OrderDetails({id}) {
    let orderId = useParams(); 
    console.log(orderId);
    //let restaurantInfos = getRestaurantInfo(localStorage.getItem('restaurantId'));
    let restaurantInfos = {
        name : "Le restaurant",
        address : "L'adresse du restaurant",
        imageUrl : "https://www.google.com",
        acceptTickets : true
    }
    let orderDetails = {
        id : 1,
        productsList : [
            {
                name : "Pizza",
                price : 10,
                quantity : 2
            },
            {
                name : "Burger",
                price : 5,
                quantity : 1
            }
        ], 
        total : 25
    }
    //let orderInfos = getOrderInfo(2);  
    return (
        <div className="flex flex-row w-screen h-screen">
            <div className="flex flex-col w-1/2 h-full bg-bgGreyColor justify-between p-6">
                <div className="flex flex-col items-start">
                    <img className="h-32 w-auto mb-4" src={restaurantInfos.imageUrl} alt="restaurant-icon" />
                    <p className="text-lg font-semibold">{restaurantInfos.name}</p>
                    <p className="text-sm text-gray-600">{restaurantInfos.address}</p>
                    {restaurantInfos.acceptTickets && <p className="text-sm text-green-500">Tickets Restaurants acceptés</p>}
                </div>                

                <div className="flex items-end justify-between mt-auto">
                    <p className="text-lg font-semibold">Total : {orderDetails.total}</p>
                    {/* Ajoutez d'autres éléments ou styles ici pour la mise en page */}
                </div>
            </div>
            <div className="m-4 items-center ">
                <p className="text-secondaryTitle">Votre panier</p>
                <DetailsTable orderDetails={orderDetails}/>
            </div>
        </div>
    );
}

export default OrderDetails;