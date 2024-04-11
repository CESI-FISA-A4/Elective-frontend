import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import CustomButton from '../../utils/components/CustomButton';
import { TextField } from '@mui/material';
import { GetCodeValidationDelivery, GetCommandeById } from '../services/Delivery.service';
import accountImg from '../../assets/account.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Order from '../../orderModule/components/Order/Order';


export default function DeliveryStates(){
    const [address, setAddress] = useState('12 rue commandant guillaume 29200 Brest');
    const [showNumber, setShowNumber] = useState(false);
    const [codeValidation, setCodeValidation] = useState('');
    const [OrderInfo, setOrderInfo] = useState({});
    const [deliveryMan, setDeliveryMan] = useState(false);
    const [userCode, setUserCode] = useState('');


    const handleShowPhoneNumber = async() => {
        setShowNumber(!showNumber);
    }


    const fetchAccount = async () => {
        try {
            console.log(localStorage.getItem("roleLabel"));
            if(localStorage.getItem("roleLabel")== "deliveryman"){
                setDeliveryMan(true);
            }
            let orderId = localStorage.getItem("ongoingOrderId");
            let response = await GetCommandeById(orderId);
            setOrderInfo({ data: response.data});
            setUserCode(response.data.clientCode);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchAccount();
    }, []);

    async function handleSubmit(e) {
        const deliveryId = localStorage.getItem('userId');
        const response = await GetCodeValidationDelivery(deliveryId)
        console.log(e);
        console.log(response);
        if(codeValidation === response){
            alert('test');
        }
    }

    const plop =  {
        "_id": "6616ee26a0f03119b9818df2",
        "articleList": [
          {
            "article": {
              "_id": "6613e364e8c1c98093d63f32",
              "name": "Menu de base McDo",
              "price": 10,
              "description": "l'happy meal la",
              "restaurantId": "661270c48866658945ee4946",
              "imageUrl": "string",
              "__v": 0
            },
            "quantity": 10,
            "_id": "6616ee26a0f03119b9818df3"
          },
          {
            "article": {
              "_id": "6613e36fe8c1c98093d63f37",
              "name": "Menu de base McDo 2",
              "price": 10,
              "description": "l'happy meal la",
              "restaurantId": "661270c48866658945ee4946",
              "imageUrl": "string",
              "__v": 0
            },
            "quantity": 5,
            "_id": "6616ee26a0f03119b9818df4"
          }
        ],
        "date": "2024/3/10 21:53",
        "clientCode": "i8fcpuji59",
        "status": {
          "_id": "6616c9681e75bc329c532572",
          "state": "orderCreated",
          "__v": 0
        },
        "restaurantId": "661274aa6ea43e23fdbf936e",
        "address": "j'habite par la",
        "clientId": 2,
        "__v": 0,
        "totalPrice": 150
      } 


    return(
        <div className="h-screen w-screen sm:flex">
            <div className="flex-column items-center content-center	">
            
                <Card className=' mt-5 mr-5 ml-5 sm:w-3/4 '>
                    <CardContent>
                    <Typography variant="h5" component="div">
                        Adresse de livraison :
                        <br/>
                        {plop.address}
                        <br/>
                        {deliveryMan ? '' : 'Votre livraison est : ' + plop.status.state}
                    </Typography>
                    </CardContent>
                </Card>

                <Card className=' mt-5 mr-5 ml-5 sm:w-3/4 '>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Code de validation
                        </Typography>
                        {deliveryMan ? <TextField className="w-full" id="Code" label="Code de Validation" variant="outlined"  onChange={(e) => {setCodeValidation(e.target.value)}}/> : 'Votre code de validation est : ' + plop.clientCode}
                        {deliveryMan ? <CustomButton onClick={handleSubmit} children='valider'/>: ''}
                    </CardContent>
                </Card>
            </div>
            <div className="flex-column items-center content-center mt-5 mr-5 ml-5">
                <Order data={{_id: "Commande n°41", totalPrice: 15, date: "12 mars 2024"}}></Order>
                <div className='flex'>
                    <Card className=' mt-5 mr-5 ml-5 w-1/3 sm:w-36 '>
                        <CardContent>
                        <img className="w-12 sm:w-24" src={accountImg} alt="Img profile" />
                        <p>restaurant</p>
                        </CardContent>
                    </Card>
                    <ArrowForwardIcon/>
                    <Card className=' mt-5 mr-5 ml-5 w-1/3 sm:w-36 '>
                        <CardContent>
                        <img className="w-12 sm:w-24" src={accountImg} alt="Img profile" />
                        <p>client</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}