import './App.css';
import RestaurantList from '../RestaurantList/RestaurantList';
import HomePage from '../HomePage/HomePage';
import { useNavigate,Routes,Route, } from 'react-router-dom';
import Nav from '../../routes/Routes';




function App() {
  const navigate = useNavigate();
  return (
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
        <Nav/>
        <Routes>
          <Route path="/home-page" element={<HomePage/>}/>
          <Route path="/restaurant-list" element={<RestaurantList/>}/>
        </Routes>
      </div>
  );

}

export default App;
