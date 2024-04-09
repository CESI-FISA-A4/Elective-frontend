import { Outlet, Routes, Route } from 'react-router-dom';
import RestaurantList from "../restaurantModule/components/RestaurantList/RestaurantList";
import CreateRestaurant from '../restaurantModule/components/CreateRestaurant/CreateRestaurant';
import RequireAuth from '../authModule/components/RequireAuth';
import UpdateRestaurant from '../restaurantModule/components/UpdateRestaurant/UpdateRestaurant';
import MyRestaurantList from '../restaurantModule/components/MyRestaurantList/MyRestaurantList';
import RestaurantDetail from '../restaurantModule/components/RestaurantDetails/RestaurantDetails';


function RestaurantPage() {
    return (
        <div className="restaurant-page">
            <Outlet />

            <Routes>
                <Route path="" element={<RestaurantList />}/>
                <Route path="owner" element={
                    <RequireAuth rolesAllowed={["admin", "restaurantOwner"]}>
                        <MyRestaurantList />
                    </RequireAuth>
                }/>
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
                <Route path=":id" element={<RestaurantDetail />} />
            </Routes>
        </div>
    );
}


export default RestaurantPage;