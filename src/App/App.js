import RequireAuth from '../authModule/components/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/protected" element={
              <RequireAuth rolesAllowed={["admin", "restaurantOwner"]}>
                <h2>TEST PROTECTED ROUTES</h2>
              </RequireAuth>
            }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;