import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Product from '../components/Product/Product';
import ProductList from "../components/ProductList/ProductList";
import { StyleContext } from "../contexts/StyleProvider";
import { useContext } from "react";
import MyHeader from "../components/Header/Header";


function App() {
  const style = useContext(StyleContext)

  return (
    <div className="App" style={style.bgGrey}>
      <Router>
        <MyHeader></MyHeader>
        <div className="m-7">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
