import { useNavigate } from 'react-router-dom';
import EditRestaurant from '../EditRestaurant/EditRestaurant';
import { createRestaurant } from '../../services/restaurant.service';


function CreateRestaurant() {
    const navigate = useNavigate();

    const handleRestaurantCreation = async(data) => {
        try {
            await createRestaurant(data);
            navigate('restaurants');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="create-restaurant">
            <EditRestaurant title={"Créer un nouveau restaurant"} onRestaurantEdited={handleRestaurantCreation}></EditRestaurant>
        </div>
    );
}


export default CreateRestaurant;