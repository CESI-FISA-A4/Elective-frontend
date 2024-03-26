import React from 'react';
import './Card.css';
import Rate from '../Rate/Rate.js';


function Card ({img, title, description, price, rate}) {

    return (
        <div className="card bg-greyColor rounded-lg">
            <img src={img} alt="product" />
            <div className= "grid grid-cols-2 gap-x-6 gap-y-6">
                <h2 className="text-left pl-1"> {title} </h2>
                <p className='text-right pr-1'> {price} € </p>
            </div>
            <p className=" text-left pl-1"> {description} </p>
            <div className='grid grid-cols-2 mb—2'>
                <Rate rate={rate}/>
                <button className="rounded bg-blackColor text-whiteColor" onClick={console.log("button works")}> Ajouter </button>
            </div>
        </div>
  );
}

export default Card;
