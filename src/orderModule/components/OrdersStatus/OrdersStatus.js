import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import './orderStatus.css';
import { useEffect, useState } from 'react';
import { getOngoingIncome, getOrdersFromStatus, getOrdersStats } from '../../services/salesman.service';


function OrdersStatus() {
    const [orderStats, setOrderStats] = useState({ data: [], loading: false });
    const [selectedOrderStats, setSelectedOrderStats] = useState({ data: [], loading: false });
    const [ongoingIncome, setOngoingIncome] = useState({ data: [], loading: false });

    const fetchOrderStats = async () => {
        try {
            setOrderStats({ data: [], loading: false });
            let response = await getOrdersStats();
            setOrderStats({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }
    const fetchSelectedOrderStats = async () => {
        try {
            setSelectedOrderStats({ data: [], loading: false });
            let response = await getOrdersFromStatus();
            setSelectedOrderStats({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    const fetchongoingIncome = async () => {
        try {
            setOngoingIncome({ data: [], loading: false });
            let response = await getOngoingIncome();
            setOngoingIncome({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchOrderStats();
        fetchSelectedOrderStats();
        fetchongoingIncome();
    }, []);

    return (
        <div className="orders-status">
            <h1 className="text-mainTitle">Statuts des commandes</h1>

            <div className="flex flex-row w-full m-3 gap-1 justify-center">
                <Card className='orders-infos p-5'>
                    <CardContent className='content'>
                        <Typography gutterBottom variant="h5" component="div">
                            Statuts
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Attente de validation du restaurant</strong> : {orderStats.loading && orderStats.data["orderChecking"] ?
                            orderStats.data["orderChecking"] : 0
                        } 
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Attente de validation du livreur</strong> : {orderStats.loading && orderStats.data["deliveryChecking"] ?
                            orderStats.data["deliveryChecking"] : 0
                        } 
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>En préparation</strong> : {orderStats.loading && orderStats.data["preparing"] ?
                            orderStats.data["preparing"] : 0
                        }  
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>En cours de livraison</strong> : {orderStats.loading && orderStats.data["delivering"] ?
                            orderStats.data["delivering"] : 0
                        } 
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Livré</strong> : {orderStats.loading && orderStats.data["delivered"] ?
                            orderStats.data["delivered"] : 0
                        } 
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Abandonné</strong> : {orderStats.loading && orderStats.data["aborted"] ?
                            orderStats.data["aborted"] : 0
                        } 
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent className='total'>
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Total</strong> : {orderStats.loading && orderStats.data["total"] ?
                            orderStats.data["total"] : 0
                        } 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Chiffre d'affaires transactionnel</strong> : {ongoingIncome.loading && ongoingIncome.data["ongoingIncome"] ?
                            ongoingIncome.data["ongoingIncome"] : 0
                        } €
                        </Typography>
                    </CardContent>
                </Card>

                <TableContainer component={Paper} sx={{ marginX: 2, maxHeight: 500, maxWidth: 800 }}>
                        <Table size='small' aria-label="simple table">
                            <TableHead className='head' sx={{padding: 2}}>
                                <TableRow>
                                    <TableCell>Restaurant</TableCell>
                                    <TableCell>N° commande</TableCell>
                                    <TableCell>Prix</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selectedOrderStats.loading && selectedOrderStats.data.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        className='row'>
                                        <TableCell>{row.restaurant}</TableCell>
                                        <TableCell>{row.orderId}</TableCell>
                                        <TableCell>{row.totalPrice}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </div>
    );
}


export default OrdersStatus;