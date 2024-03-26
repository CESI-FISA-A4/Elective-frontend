import './App.css';
import img from '../../assets/product.svg';
import Card from '../Card/Card';

function App() {
  return (
    <div className="App">
        <Card 
        title="Ma salade" 
        description="Salade, poulet, fromage..."
        price= "22,5"
        rate="4,5"
        img={img}
        page={'/'}
        />
    </div>
  );
}

export default App;
