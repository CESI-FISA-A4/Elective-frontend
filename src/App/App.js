import RequireAuth from '../authModule/components/RequireAuth';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Header from '../utils/components/Header/Header';
import RestaurantPage from '../pages/RestaurantPage';
import Contact from '../contactModule/components/Contact/Contact';
import AccountPage from '../pages/AccountPage';
import ClientPage from '../pages/ClientPage';
import MonitoringList from '../monitoringModule/components/MonitoringList/MonitoringList';
import ArticlePage from '../pages/ArticlePage';
import OrdersStatus from '../orderModule/components/OrdersStatus/OrdersStatus';
import GitRepos from '../RepoModule/components/GitRepo/GitRepo';
import { useEffect, useState } from 'react';
import { isConnected } from '../authModule/services/auth.service';
import './App.css';
import OrderDetails from '../orderModule/components/OrderDetails/OrderDetails';

function RouteTrigger({callback}) {
  const location = useLocation();

  useEffect(() => {
    callback(location.pathname);
  }, [location]);
}


function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(isConnected());

  const handleRouteChange = (path) => {
    setIsAuthenticate(isConnected());
  }

  return (
    <div className="app">
      <Router>
        <Header isAuthenticate={isAuthenticate}></Header>
        <RouteTrigger callback={handleRouteChange}></RouteTrigger>
        
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/clients" element={
            <RequireAuth rolesAllowed={["admin", "salesman"]}>
              <ClientPage />
            </RequireAuth>
            }>
          </Route>
          <Route path="/articles/edit/:id" element={<ArticlePage/>}></Route>
          <Route path="/articles/" element={<ArticlePage />}> </Route>
          <Route path="/restaurants/*" element={<RestaurantPage/>}></Route>
          <Route path="/" element={<RestaurantPage/>}></Route>
          <Route path="/account" element={
            <RequireAuth>
              <AccountPage/>
            </RequireAuth>
            }>
          </Route>
          <Route path="/orders/:orderId" element={
            <RequireAuth rolesAllowed={["user", "deliveryman", "restaurantOwner", 'admin']}>
              <OrderDetails />
            </RequireAuth>
            }>
          </Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/monitoring" element={
            <RequireAuth rolesAllowed={["admin", "technician"]}>
              <MonitoringList/>
            </RequireAuth>
            }>
          </Route>
          <Route path="/git-editor" element={
            <RequireAuth rolesAllowed={["admin", "technician", "developer"]}>
              <GitRepos />
            </RequireAuth>
            }>
          </Route>
          <Route path="/orders-status" element={
            <RequireAuth rolesAllowed={["admin", "salesman"]}>
              <OrdersStatus />
            </RequireAuth>
            }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;