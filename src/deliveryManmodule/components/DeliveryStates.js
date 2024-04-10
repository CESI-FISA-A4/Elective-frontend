import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import CustomButton from '../../utils/components/CustomButton';
import { TextField } from '@mui/material';
import { validateDelivery, GetCommandeById } from '../services/Delivery.service';
import accountImg from '../../assets/account.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Order from '../../orderModule/components/Order/Order';
import { useParams } from 'react-router-dom';


export default function DeliveryStates(){
    const { id } = useParams();
    const [address, setAddress] = useState('12 rue commandant guillaume 29200 Brest');
    const [showNumber, setShowNumber] = useState(false);
    const [codeValidation, setCodeValidation] = useState('');
    const [orderInfo, setOrderInfo] = useState({data:{},loading:false});
    const [deliveryMan, setDeliveryMan] = useState(false);
    const [userCode, setUserCode] = useState('');


    const handleShowPhoneNumber = async() => {
        setShowNumber(!showNumber);
    }


    const fetchAccount = async () => {
        try {
            console.log(localStorage.getItem("roleLabel"));
            setOrderInfo({data : {},loading: false});
            if(localStorage.getItem("roleLabel")== "deliveryman"){
                setDeliveryMan(true);
            }
            let response = await GetCommandeById(id);
            setOrderInfo({data : response.data,loading: true});
            setUserCode(response.data.clientCode);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchAccount();
    }, []);

    async function handleSubmit(e) {
        const response = await validateDelivery(id,{code: codeValidation});
        alert(response)
        if(codeValidation === response){
            alert('test');
        }
    }


    return(
        <div className="h-screen w-screen sm:flex">
            <div className="flex-column items-center content-center	">
            
                <Card className=' mt-5 mr-5 ml-5 sm:w-3/4 '>
                    <CardContent>
                    <Typography variant="h5" component="div">
                        Adresse de livraison :
                        <br/>
                        {
                            orderInfo.loading &&
                            orderInfo.data["address"]
                        }
                    </Typography>
                    {deliveryMan ? <CustomButton className='' onClick={handleShowPhoneNumber}>{showNumber ? '06.85.13.13.13' : 'Appeller le client'}</CustomButton> : ''}
                    </CardContent>
                </Card>

                <Card className=' mt-5 mr-5 ml-5 sm:w-3/4 '>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Code de validation
                        </Typography>
                        {deliveryMan ? <TextField className="w-full" id="Code" label="Code de Validation" variant="outlined"  onChange={(e) => {setCodeValidation(e.target.value)}}/> : 'Votre code de validation est : ' + userCode.value}
                        {deliveryMan ? <CustomButton onClick={handleSubmit} children='valider'/>: ''}
                    </CardContent>
                </Card>
            </div>
            <div className="flex-column items-center content-center mt-5 mr-5 ml-5">
                {orderInfo.loading && 
                    <Order data={{
                        _id: orderInfo.data["_id"], 
                        state: orderInfo.data.status?.state,
                        totalPrice: orderInfo.data["totalPrice"], 
                        date: orderInfo.data["date"]
                    }}></Order>
                }
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