import Order from "../../../../orderModule/components/Order/Order";
import './orderHistory.css';

function OrderHistory() {
    let orders = [
        {_id: "Commande n°41", totalPrice: 15, date: "12 mars 2024"},
        {_id: "Commande n°42", totalPrice: 254, date: "13 avril 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
        {_id: "Commande n°43", totalPrice: 36, date: "2 mail 2024"},
    ];

    return (
        <div className="command-area w-full">
            <h2 className='text-secondaryTitle p-2'>Historique de commande</h2>
            <div className="orders flex flex-col gap-2 p-2 m-2">
                {orders && 
                    orders.map((order, index) => {
                        return <Order key={index} data={order}></Order>
                    })
                }
            </div>
        </div>
    );
}


export default OrderHistory;