import resto_img from '../../assets/resto_img.svg';
import './OrderPreview.css';

function OrderPreview({ orderNumber, total, date, productNumber }) {
  return (
    <div className="orderpreview grid grid-cols-2 bg-greenColor rounded">
        <img src={resto_img} alt="photo" className='rounded-full'/>
        <div>
            <h2 className='m-3'>Commande n°{orderNumber}</h2>

            <div className="mb-2 divide-x grid grid-cols-3 gap-x-6 gap-y-6">
                <p>Total : {total} €</p>
                <p>Date : {date}</p>
                <p>Nombre de produits : {productNumber}</p>
            </div>
        </div>
    </div>
  );
}

export default OrderPreview;