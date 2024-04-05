import RequireAuth from '../../utils/auth/RequireAuth';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/protected" element={
              <RequireAuth rolesAllowed={["admin", "restaurantOwner"]}>
                <Protected />
              </RequireAuth>
            }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;