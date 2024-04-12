import { useEffect, useState } from "react";
import Order from "../../../../orderModule/components/Order/Order";
import './restaurantHistory.css';
import { getOrders } from "../../../services/restaurant.service";

function RestaurantHistory({ id }) {
    const [restaurantOrderHistory, setRestaurantOrderHistory] = useState({ data: [], loading: false });

    const fetchOrderHistory = async () => {
        try {
            setRestaurantOrderHistory({ data: {}, loading: false });
            let response = await getOrders(id);
            setRestaurantOrderHistory({ data: response.data, loading: true });

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
                {restaurantOrderHistory.loading && 
                    restaurantOrderHistory.data.map((order, index) => {
                        return <Order key={index} data={{
                            _id:order._id,
                            totalPrice:order.totalPrice,
                            date:order.date
                        }}></Order>
                    })
                }
            </div>
        </div>
    );
}


export default RestaurantHistory;