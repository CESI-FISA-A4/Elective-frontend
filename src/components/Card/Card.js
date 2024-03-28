import {React, useState} from 'react';
import './Card.css';
import Rate from '../Rate/Rate.js';
import ChooseQuantity from '../ChooseQuantity/ChooseQuantity.js';


function Card ({img, title, description, price, rate, page}) {

    const [quantity, setQuantity] = useState(0);

    return (
        <a href={page}>
            <div className="card bg-greyColor rounded-lg">
                <img src={img} alt="photo" />
                <div className= "grid grid-cols-2 gap-x-6 gap-y-6">
                    <h2 className="text-left pl-1"> {title} </h2>
                    <p className='text-right pr-1'> {price} € </p>
                </div>
                <p className=" text-left pl-1"> {description} </p>
                <div className='grid grid-cols-2 mb—2'>
                    <Rate rate={rate}/>
                    <ChooseQuantity className="ml-5 mr-3 mb-1" quantity={quantity} setQuantity={setQuantity}/>
                </div>
            </div>
        </a>
  );
}

export default Card;
                // <button className="rounded bg-blackColor text-whiteColor" onClick={console.log("button works")}> Ajouter </button>
