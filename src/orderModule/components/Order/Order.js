import { CardActionArea } from '@mui/material';
import './order.css';


function Order({ data }) {
    return (
        <CardActionArea>
            <div className="order flex flex-row items-center border-solid border-2 rounded">
                <img src="https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg" />
                <div className="info flex flex-col w-full">
                    <h3><strong>{data._id}</strong></h3>
                    <p>Total : {data.totalPrice}€ | {data.date}</p>
                </div>
            </div>
        </CardActionArea>
    );
}


export default Order;