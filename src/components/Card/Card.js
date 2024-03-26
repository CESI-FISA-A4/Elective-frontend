import React from 'react';
import './Card.css';
import star from '../../assets/star.svg';

function Card ({img, title, description, price, rate}) {

    return (
        <div className="card bg-greyColor rounded-lg">
            <img src={img} alt="product" />
            <div className= "grid grid-cols-2 gap-x-6 gap-y-6">
                <h2 className="bg-blue-200 text-left"> {title} </h2>
                <p className='bg-blue-200 text-right'> {price} € </p>
            </div>
            <p className="bg-blue-200 text-left"> {description} </p>
            <div className='grid grid-cols-2'>
                <div className='grid grid-cols-2 gap-x-0'>
                    <img src={star} alt="Star"></img>
                    <p className="bg-blue-200 text-left mr-6"> {rate} </p> 
                </div>
                <button className="rounded bg-blackColor text-whiteColor" onClick={console.log("button works")}> Ajouter </button>
            </div>
        </div>
  );
}

export default Card;
