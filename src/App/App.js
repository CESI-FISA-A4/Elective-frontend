import RequireAuth from '../authModule/components/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import './App.css';
import DeliveryStates from '../deliveryManmodule/components/DeliveryStates';


function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        
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
          <Route path="/deliveystates/" element={<DeliveryStates/>}></Route>
          <Route path="/account" element={
            <RequireAuth>
              <AccountPage/>
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