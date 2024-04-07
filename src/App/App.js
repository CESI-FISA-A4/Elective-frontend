import RequireAuth from '../authModule/components/RequireAuth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Header from '../utils/components/Header/Header';
import GitRepos from '../RepoModule/components/GitRepo';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/home" element={
            <RequireAuth>
              <HomePage/>
            </RequireAuth>
            }>
          </Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path='/GitRepos' element={<GitRepos/>}></Route>
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