import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Restaurant from "../Restaurant/Restaurant";
import { getRestaurants, searchRestaurantsByName } from "../../services/restaurant.service";
import Grid from '@mui/material/Grid';
import { isAdmin, isRestaurantOwner } from "../../../authModule/services/auth.service";
import './myRestaurantList.css';

function MyRestaurantList() {
    const [restaurantSource, setRestaurantSource] = useState({data: [], loading: false});

    const navigate = useNavigate();

    const fetchData = async() => {
        try {
            setRestaurantSource({data: [], loading: false});

            let userId = localStorage.getItem("userId");
            let response = await getRestaurants({restaurantOwnerId: userId});

            setRestaurantSource({data: response.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleRestaurantUpdated = () => {
        fetchData();
    }

    return (
        <div className="restaurant-list m-4">
            <div className="flex justify-center items-center">
                <h1 className="text-mainTitle p-3">Mes restaurants</h1>
                
                {(isAdmin() || isRestaurantOwner()) &&
                    <IconButton aria-label="add" color='info' onClick={() => navigate("/restaurants/create")}>
                        <AddBoxOutlinedIcon fontSize="large" />
                    </IconButton>
                }
            </div>
            <br />
            <Grid className="restaurants" container alignItems="stretch">
                {restaurantSource.loading &&
                    restaurantSource.data.map((resto, index) => 
                    <Grid item style={{display: 'flex', padding: 8}}>
                        <Restaurant enableUpdate={true} key={index} 
                            data={resto} 
                            onRestaurantUpdated={handleRestaurantUpdated}
                        />
                    </Grid>)
                }
            </Grid>
        </div>
    );
}


export default MyRestaurantList;