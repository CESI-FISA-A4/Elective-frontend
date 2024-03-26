import resto_img from '../../assets/resto_img.jpg';

function OrderPreview({ orderNumber, total, date, productNumber }) {
  return (
    <div className="grid grid-cols-2 bg-greenColor">
        <img src={resto_img} alt="photo" className='rounded-full'/>
        <div>
            <h2>Commande n°{orderNumber}</h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                <p>Nombre de produits : {productNumber}</p>
                <p>Total : {total} €</p>
                <p>Date : {date}</p>
            </div>
        </div>
    </div>
  );
}