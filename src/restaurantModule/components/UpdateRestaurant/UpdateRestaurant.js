import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditRestaurant from '../EditRestaurant/EditRestaurant';
import { getRestaurantById, updateRestaurantById } from '../../services/restaurant.service';


function UpdateRestaurant() {
    const { id } = useParams();
    const navigate = useNavigate();

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
    }, []);

    const handleRestaurantUpdate = async(data) => {
        try {
            await updateRestaurantById(id, data);
            navigate(-1);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="update-restaurant">
            {restaurant.loading &&
                <EditRestaurant title={"Modifier un restaurant"} onRestaurantEdited={handleRestaurantUpdate} restaurant={restaurant.data}></EditRestaurant>
            }
        </div>
    );
}


export default UpdateRestaurant;