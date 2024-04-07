import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SearchBar from "../../../utils/components/SearchBar/SearchBar";
import Restaurant from "../Restaurant/Restaurant";
import { getRestaurants, searchRestaurantsByName } from "../../services/restaurant.service";
import './restaurantList.css';
import { isAdmin } from "../../../authModule/services/auth.service";

function RestaurantList() {
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantSource, setRestaurantSource] = useState({data: [], loading: false});

    const navigate = useNavigate();

    const fetchData = async(value="") => {
        try {
            setRestaurantSource({data: [], loading: false});
            let response = null;
            if(value) response = await searchRestaurantsByName(value);
            else response = await getRestaurants();

            setRestaurantSource({data: response.data, loading: true});
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchBarChange = async(value) => {
        setRestaurantName(value);

        fetchData(value);
    }

    const handleRestaurantUpdated = () => {
        fetchData(restaurantName);
    }

    return (
        <div className="restaurant-list m-4">
            <div className="flex justify-center items-center">
                <h1 className="text-mainTitle p-3">Rechercher un restaurant</h1>
                
                {(isAdmin() || true) &&
                    <IconButton aria-label="add" color='info' onClick={() => navigate("create")}>
                        <AddBoxOutlinedIcon fontSize="large" />
                    </IconButton>
                }
            </div>

            <SearchBar value={restaurantName} onSearchChange={handleSearchBarChange}></SearchBar>
            <br />

            <div className="restaurants">
                {restaurantSource.loading &&
                    restaurantSource.data.map((resto, index) => 
                    <Restaurant key={index} 
                                data={resto} 
                                onRestaurantUpdated={handleRestaurantUpdated}/>)
                }
            </div>
        </div>
    );
}


export default RestaurantList;