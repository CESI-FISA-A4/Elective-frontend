import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getRestaurantById, getProductsByRestaurantId, getMenusByRestaurantId} from "../../services/restaurant.service";
import './restaurantDetail.css';
import Article from "../../../articleModule/components/Article/Article";
import { isRestaurantOwner } from "../../../authModule/services/auth.service";
import { useNavigate } from 'react-router-dom';
import CustomButton from "../../../utils/components/CustomButton";
import { createOrders } from "../../../orderModule/services/order.service";
import TextField from '@mui/material/TextField'
import './restaurantDetail.css';


function RestaurantDetail() {
    const { id } = useParams();

    const naviguate = useNavigate();

    const [restaurant, setRestaurant] = useState({ data: {}, loading: false });
    const [products, setProducts] = useState([]);
    const [menus, setMenus] = useState([]);
    const [basket, setBasket] = useState([]);
    const [address, setAdress] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                let productsValue = await getProductsByRestaurantId(id);
                setProducts(productsValue);
                let menusValue = await getMenusByRestaurantId(id);
                setMenus(menusValue);
                setRestaurant({ data: {}, loading: false });
                let response = await getRestaurantById(id);
                setRestaurant({ data: response.data, loading: true });
            } catch (error) {
                alert(error);
            }
        }
        fetchRestaurant();
    }, []);

    function onClickUser(article){
        let existingElementIndex = basket.findIndex((item) => item.article === article.articleId);
        if (existingElementIndex == -1){ 
            let newElement = {'article': article.articleId, 'quantity': 1};
            basket.push(newElement);
        }else{
            basket[existingElementIndex].quantity++;
        }
    }
    
    function onClickRestaurantOwner(productId, isMenu){
        if (isMenu){
            navigate(`/articles/edit/${productId}?isMenu=${isMenu}`);
        }else{
            navigate(`/articles/edit/${productId}`);
        }
        
    }

    function clearBasket(){
        if(basket.length !== 0){
            setBasket([]);
        }
    }

    function goToOrderDetails(){
        let orderId = localStorage.getItem("ongoingOrderId");
        navigate(`/orders/${orderId}`);
    }

    async function createOrder(){
        if(address === ''){
            alert("Vous devez saisir une adresse de livraison avant de valider votre panier !")
        }
        let data = {
            "address": address,
            "restaurantId": id, 
            "articleList": basket
        };
        try{
            if (basket.length !== 0) {
                let orderId = await createOrders(data);
                localStorage.setItem("ongoingOrderId", orderId);         
                clearBasket();
                setTimeout(goToOrderDetails(), 5000);
            }else{
                alert("Le panier est vide ! Cliquez sur les cartes pour ajouter des articles !")
            }
        }catch(error){
            alert(error);
        }
    }

    return (
        <div className="restaurant-detail">
            {restaurant.loading &&
                <>
                    <div className="flex flex-row bg-bgGreyColor justify-around p-4">
                        <img src={restaurant.data.imgUrl} alt="restaurant details" />
                        <div className="flex flex-col w-full mx-4">
                            <h1 className="text-mainTitle align-center pb-3">{restaurant.data.name}</h1>
                            <p className="text-left">{restaurant.data.description}</p>
                            <TextField required className="w-full" id="address" label="Adresse de livraison" variant="outlined"  onChange={(e) => {setAdress(e.target.value)}}/>  
                        </div>
                        <div className="flex flex-col h-auto w-1/3 m-4 justify-between gap-3">
                            <div className="info">
                                <p>Adresse : {restaurant.data.address}</p>
                                <p>{restaurant.data.acceptTicket ?
                                    "Tickets restaurants acceptés"
                                    :
                                    "Nous ne prenons pas les tickets restaurants"
                                }</p>
                            </div>
                            <div className="stat">
                                <CustomButton onClick={() => naviguate(`/restaurants/statistics/${id}`)}>Statistique commandes</CustomButton>
                            </div>
                            <CustomButton children={"Vider le panier"} onClick={clearBasket} /> 
                            <CustomButton children={"Valider la commande"} onClick={createOrder} />
                        </div>
                    </div>
                    <div className="content flex flex-col">
                        <h2 className="text-secondaryTitle">Produits</h2>
                        <div className="flex flex-row">
                            {products &&
                                products.map((product, index) => (
                                    <Article onSelect={() => isRestaurantOwner() ? onClickRestaurantOwner(product.productId, false) : onClickUser(product)} key={index} data={product} />
                                ))
                            }
                        </div>


                        <h2 className="text-secondaryTitle">Menus</h2>
                        <div className="flex flex-row">
                            {menus &&
                                menus.map((menu, index) => (
                                    <Article onSelect={() => isRestaurantOwner() ? onClickRestaurantOwner(menu.productId, true) : onClickUser(menu)} key={index} data={menu} />
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </div >
    );
}


export default RestaurantDetail;