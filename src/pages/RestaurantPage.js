import { Outlet, Routes, Route } from 'react-router-dom';
import RestaurantList from "../restaurantModule/components/RestaurantList/RestaurantList";
import CreateRestaurant from '../restaurantModule/components/CreateRestaurant/CreateRestaurant';
import RequireAuth from '../authModule/components/RequireAuth';
import UpdateRestaurant from '../restaurantModule/components/UpdateRestaurant/UpdateRestaurant';


function RestaurantPage() {
    return (
        <div className="restaurant-page">
            <Outlet />

            <Routes>
                <Route path="" element={<RestaurantList />}/>
                <Route path="create" element={
                    <RequireAuth rolesAllowed={["admin", "restaurantOwner"]}>
                        <CreateRestaurant />
                    </RequireAuth>
                }>
                </Route>
                <Route path="update/:id" element={
                    <RequireAuth rolesAllowed={["admin", "restaurantOwner"]}>
                        <UpdateRestaurant />
                    </RequireAuth>
                }></Route>
                <Route path=":id" element={<h1>VUE DETAIL</h1>} />
            </Routes>
        </div>
    );
}


export default RestaurantPage;