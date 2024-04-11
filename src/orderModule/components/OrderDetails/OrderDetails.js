import { abortOrders, getOrdersById, restaurantPreparedOrders, userPayedOrders } from "../../services/order.service";
import React from "react";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomButton from "../../../utils/components/CustomButton";
import { useNavigate } from 'react-router-dom';
import { isDeliveryman, isRestaurantOwner, isUser } from "../../../authModule/services/auth.service";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import { validateDelivery } from "../../../deliveryManmodule/services/Delivery.service";


function OrderDetails() {
    const { orderId } = useParams();

    const navigate = useNavigate();
    const [orderInfos, setOrderInfos] = useState([]);
    const [articleList, setArticleList] = useState([]);
    const [orderStatus, setOrderStatus] = useState('');
    const [codeValidation, setCodeValidation] = useState('');

    useEffect(() => {
        const fetchOrderInfos = async () => {
            console.log(orderId);
            let newOrderInfos = await getOrdersById(orderId);
            setOrderInfos(newOrderInfos);
            setOrderStatus(newOrderInfos.status.state);
            setArticleList(newOrderInfos.articleList);
        }
        fetchOrderInfos();
    }, []);


    async function cancelOrder() {
        try {
            let response = await abortOrders(orderId);
            alert("La commande a bien été annulée !");
            setOrderStatus("aborted");
            return response.data;
        } catch (error) {
            alert("Une erreur s'est produite lors de l'annulation de votre commande. Veuillez réessayer.")
        }
    }

    async function payOrder() {
        try {
            alert("Paiement en cours...");
            let response = await userPayedOrders(orderId);
            setTimeout(
                () => { alert("Paiement validé, commande prise en compte !"); },
                2000);
            setOrderStatus("orderChecking");
            return response;
        } catch (error) {
            alert("Une erreur s'est produite. Veuillez recommencer");
        }
    }
    async function orderReady() {
        try {
            let response = await restaurantPreparedOrders(orderId);
            setOrderStatus("delivering");
            return response;
        } catch (error) {
            alert("Une erreur s'est produite. Veuillez recommencer");
        }
    }
    async function handleSubmit(e) {
        try {
            const response = await validateDelivery(orderId, { code: codeValidation });
            console.log(response);
            alert('commande validée !')
            setOrderStatus("delivered");

        } catch (error) {
            alert('code invalide')
        }
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-secondaryTitle p-4"> Détail de votre commande </h1>
            <TableContainer component={Paper} className='m-5' sx={{ maxHeight: 500, maxWidth: 1200 }}>
                <Table size='small' aria-label="simple table">
                    <TableHead className='head' sx={{ padding: 2 }}>
                        <TableRow>
                            <TableCell>Id de l'article</TableCell>
                            <TableCell>Nom de l'article</TableCell>
                            <TableCell>Quantité</TableCell>
                            <TableCell>Prix à l'unité</TableCell>
                            <TableCell>Sous-Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articleList.map((row, index) => (
                            <TableRow
                                key={index}
                                className='row'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row._id}</TableCell>
                                <TableCell>{row.article.name}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                                <TableCell>{row.article.price}</TableCell>
                                <TableCell>{row.article.price * row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="flex flex-row m-5 gap-6">
                {isUser() && (orderStatus !== "aborted") && (orderStatus !== "delivered") ? <CustomButton onClick={cancelOrder} children={"Annuler la commande"} /> : null}
                {isUser() && orderStatus === "orderCreated" ? <CustomButton onClick={payOrder} children={"Payer la commande"} /> : null}
                {isRestaurantOwner() && orderStatus === "preparing" && <CustomButton onClick={orderReady} children={"Commande prête !"} />}
                <p className="text-secondaryTitle">Total : {orderInfos.totalPrice} €</p>
            </div>
            <p className="text-secondaryTitle" > Statut de la commande : {orderStatus} </p>
            <div className="flex flex-row m-5 gap-6">
                {isDeliveryman() && orderStatus === "delivering" &&
                    <Card className=' mt-5 mr-5 ml-5 sm:w-3/4 '>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Code de validation
                            </Typography>
                            <TextField className="w-full" id="Code" label="Code de Validation" variant="outlined" onChange={(e) => { setCodeValidation(e.target.value) }} />
                            <CustomButton onClick={handleSubmit} children='valider' />
                        </CardContent>
                    </Card>
                }
                {isDeliveryman() && 
                    <Card className=' mt-5 mr-5 ml-5 sm:w-3/4 '>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Adresse de livraison :
                                <br />
                                {   
                                    orderInfos.address
                                }
                            </Typography>
                        </CardContent>
                    </Card>
                }
            </div>
        </div>
    )

}

export default OrderDetails;