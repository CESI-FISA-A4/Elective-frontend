import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getRestaurantById } from "../../services/restaurant.service";
import './restaurantDetail.css';
import Article from "../../../articleModule/components/Article/Article";

function RestaurantDetail() {
    const { id } = useParams();

    const [restaurant, setRestaurant] = useState({ data: {}, loading: false });

    const products = [
        { name: "Spaghettis bolognaise", price: "12,65", description: "Le meilleur plat du monde", imageUrl: "https://img.cuisineaz.com/660x660/2016/07/29/i84653-spaghettis-bolognaise-rapides.jpg" },
        { name: "Spaghettis carbonara", price: "14,65", description: "Le 2ième meilleur plat du monde", imageUrl: "https://img.passeportsante.net/1200x675/2021-03-19/i100428-spaghetti-a-la-carbonara.webp" },
        { name: "Spaghettis bolognaise", price: "12,65", description: "Le meilleur plat du monde", imageUrl: "https://img.cuisineaz.com/660x660/2016/07/29/i84653-spaghettis-bolognaise-rapides.jpg" },
    ];
    const menus = [
        { name: "Menu pates", price: "21", description: "Les meilleurs plats", imageUrl: "https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/18q/photo-de-spaghetti-1.jpg" },
        { name: "Menu pates", price: "21", description: "Les meilleurs plats", imageUrl: "https://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/18q/photo-de-spaghetti-1.jpg" },
    ];


    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                setRestaurant({ data: {}, loading: false });
                let response = await getRestaurantById(id);
                setRestaurant({ data: response.data, loading: true });
            } catch (error) {
                alert(error);
            }
        }

        fetchRestaurant();
    }, [])

    return (
        <div className="restaurant-detail">
            {restaurant.loading &&
                <>
                    <div className="flex flex-row bg-bgGreyColor justify-around p-4">
                        <img src={restaurant.data.imgUrl} alt="restaurant details" />
                        <div className="flex flex-col w-full mx-4">
                            <h1 className="text-mainTitle align-center pb-3">{restaurant.data.name}</h1>
                            <p className="text-left">{restaurant.data.description}</p>
                        </div>
                        <div className="flex flex-col h-auto w-1/3 justify-start gap-3">
                            <p>Adresse : {restaurant.data.address}</p>
                            <p>{restaurant.data.acceptTicket ?
                                "Tickets restaurants acceptés"
                                :
                                "Nous ne prenons pas les tickets restaurants"
                            }</p>
                        </div>
                    </div>
                    <div className="content flex flex-col">
                        <h2 className="text-secondaryTitle">Produits</h2>
                        <div className="flex flex-row">
                            {products &&
                                products.map((product, index) => (
                                    <Article key={index} data={product} />
                                ))
                            }
                        </div>


                        <h2 className="text-secondaryTitle">Menus</h2>
                        <div className="flex flex-row">
                            {menus &&
                                menus.map((menu, index) => (
                                    <Article key={index} data={menu} />
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </div >
    );
}


export default RestaurantDetail;