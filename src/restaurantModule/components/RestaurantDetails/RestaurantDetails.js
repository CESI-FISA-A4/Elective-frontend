import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { getRestaurantById } from "../../services/restaurant.service";
import './restaurantDetail.css';

function RestaurantDetail() {
    const { id } = useParams();

    const naviguate = useNavigate();

    const [restaurant, setRestaurant] = useState({data: {}, loading: false});

    useEffect(() => {
        const fetchRestaurant = async() => {
            try {
                setRestaurant({data: {}, loading: false});
                let response = await getRestaurantById(id);
                setRestaurant({data: response.data, loading: true});
            } catch (error) {
                alert(error);
            }
        } 

        fetchRestaurant();
    }, [])

    return (
        <div className="restaurant-detail">
            <div className="flex flex-row bg-bgGreyColor">
                {restaurant.loading &&
                    <>
                        <img src={restaurant.data.imgUrl} alt="restaurant details" />
                        <div className="flex flex-col w-full mx-4">
                            <h1 className="text-mainTitle align-center pb-3">{restaurant.data.name}</h1>
                            <p className="text-left">{restaurant.data.description}</p>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}


export default RestaurantDetail;