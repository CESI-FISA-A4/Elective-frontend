import { useEffect, useState } from "react";
import Order from "../../../../orderModule/components/Order/Order";
import { getOrders } from "../../../services/account.service";
import './orderHistory.css';

function OrderHistory() {
    const [orderHistory, setOrderHistory] = useState({ data: {}, loading: false });

    const fetchOrderHistory = async () => {
        try {
            setOrderHistory({ data: {}, loading: false });
            let response = await getOrders();
            setOrderHistory({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        fetchOrderHistory();
    }, []);

    return (
        <div className="command-area w-full">
            <h2 className='text-secondaryTitle p-2'>Historique de commande</h2>
            <div className="orders flex flex-col gap-2 p-2 m-2">
                {orderHistory.loading && 
                    orderHistory.data.map((order, index) => {
                        return <Order key={index} data={{
                            _id : order._id,
                            totalPrice: order.totalPrice,
                            date: order.date
                        }}></Order>
                    })
                }
            </div>
        </div>
    );
}


export default OrderHistory;