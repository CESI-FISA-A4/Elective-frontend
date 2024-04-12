import { CardActionArea } from '@mui/material';
import './order.css';
import { Link } from 'react-router-dom';


function Order({ data }) {
    return (
        <CardActionArea>
            <Link to={`/orders/${data._id}`}>
                <div className="order flex flex-row items-center border-solid border-2 rounded">
                    <img src="https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg" />
                    <div className="info flex flex-col w-full">
                        <h3><strong>Commande {data._id}</strong></h3>
                        <p>Total : {data.totalPrice}€ | {data.date}</p>
                        <h2>{data.state}</h2>
                    </div>
                </div>
            </Link>
        </CardActionArea>
    );
}


export default Order;