import './App.css';
import Card from '../Card/Card';
import product from '../../assets/product.svg';
import OrderPreview from '../OrderPreview/OrderPreview';


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
      <OrderPreview /> 
    </div>
  );
}

export default App;
