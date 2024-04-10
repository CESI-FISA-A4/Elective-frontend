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


function OrdersStatus() {
    // const [clientSource, setClientSource] = useState({ data: [], loading: false });

    const fetchData = async () => {
        try {
            // setClientSource({ data: [], loading: false });
            // let response = await getAllAccounts();
            // setClientSource({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();
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
                            <strong>Attente de validation du restaurant</strong> : 0 
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Attente de validation du livreur</strong> : 0
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>En préparation</strong> : 0 
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>En cours de livraison</strong> : 0
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Livré</strong> : 0
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Abandonné</strong> : 0
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent className='total'>
                        <Typography variant="body2" color="text.secondary" align='left'>
                            <strong>Total</strong> : 0
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
                                <TableRow
                                    className='row'>
                                    <TableCell>AA</TableCell>
                                    <TableCell>BB</TableCell>
                                    <TableCell>CC</TableCell>
                                </TableRow>
                                {/* {[].data.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        className='row'>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </div>
    );
}


export default OrdersStatus;