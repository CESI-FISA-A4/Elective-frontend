import './App.css';
import Card from '../Card/Card';
import product from '../../assets/product.svg';


function App() {
  return (
    <div className="App">
      <Card 
      img={product}
      title="Product"
      description="Description"
      price="22,5"
      rate="4"
      page="/"
      />
    </div>
  );
}

export default App;
