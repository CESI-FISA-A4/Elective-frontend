import { useState } from "react";
import SearchBar from "../../../utils/components/SearchBar/SearchBar";
import Restaurant from "../Restaurant/Restaurant";
import './restaurantList.css';

function RestaurantList() {
    const [restaurantName, setRestaurantName] = useState("");

    let restaurants = [
        {name: "Le resto", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit iure consectetur necessitatibus officia animi ut earum nemo quaerat hic. Error blanditiis libero vero consequatur qui magnam at minus itaque!", imageUrl: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" },
        {name: "Le resto", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit iure consectetur necessitatibus officia animi ut earum nemo quaerat hic. Error blanditiis libero vero consequatur qui magnam at minus itaque!", imageUrl: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" },
        {name: "Le resto", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit iure consectetur necessitatibus officia animi ut earum nemo quaerat hic. Error blanditiis libero vero consequatur qui magnam at minus itaque!", imageUrl: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" },
        {name: "Le resto", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit iure consectetur necessitatibus officia animi ut earum nemo quaerat hic. Error blanditiis libero vero consequatur qui magnam at minus itaque!", imageUrl: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" },
    ]

    const handleSearchBarChange = (value) => {
        setRestaurantName(value);
    }

    return (
        <div className="restaurant-list m-4">
            <h1 className="text-mainTitle p-3">Rechercher un restaurant</h1>

            <SearchBar onSearchChange={handleSearchBarChange}></SearchBar>
            <br />

            <div className="restaurants">
                {restaurants.map((resto, index) => <Restaurant key={index} name={resto.name} description={resto.description} imageUrl={resto.imageUrl} />)}
            </div>
        </div>
    );
}


export default RestaurantList;