import React from "react";
import logoRestaurant from '../../assets/logo.svg';
import Rate from "../Rate/Rate";
import header from "../Header/Header";

export default function RestaurantPresentation({name, description, rate, deliveryTime, deliveryPrice, tckRest}){
    return (
        <div>
            <header/>
            <div className=" md:flex justify-between h-full h-48 w-full bg-slate-500/10 ">
            <div className="flex justify-center items-center ">
                <img className='flex w-24 md:w-56 md:ml-5' src={logoRestaurant} alt="photo" />
            </div>
                <div className="w-full mt-5">       
                    <h1 className="text-center md:text-left text-3xl font-medium ">{name}</h1>
                    <p className="text-center md:text-left mt-2">{description}</p>
                    <div className="flex flex-col">
                        <br/>
                            <p className="text-center md:text-right mr-5">Livraison en {deliveryTime} min</p>
                            <p className="text-center md:text-right  mr-5">Frais de livraison: {deliveryPrice} €</p>
                            <br/>
                            <p className="text-center md:text-right mr-5">Paiement par Tickets Restaurant {tckRest}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}