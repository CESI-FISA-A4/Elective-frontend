import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import './restaurantStats.css';
import { getRestaurantStats } from '../../services/restaurant.service';
import RestaurantHistory from './restaurantHistory/RestaurantHistory';

function RestaurantStats() {
    const { id } = useParams();
    const [restaurantStat, setRestaurantStat] = useState({ data: [], loading: false });

    const fetchData = async () => {
        try {
            setRestaurantStat({ data: [], loading: false });
            let response = await getRestaurantStats(id);
            setRestaurantStat({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        console.log(id);
        fetchData();
    }, []);

    return (
        <>
            <h1 className='text-mainTitle'>Statistiques restaurant</h1>

            <div className="w-full flex flex-col items-center justify-center">
                <TableContainer component={Paper} className='m-5' sx={{ maxHeight: 500, maxWidth: 1200 }}>
                    <Table size='medium' aria-label="simple table">
                        <TableHead className='head' sx={{ padding: 2 }}>
                            <TableRow>
                                <TableCell>Panier moyen</TableCell>
                                <TableCell>Nombre de commandes</TableCell>
                                <TableCell>Global</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantStat.loading &&
                                <TableRow
                                    className='row'
                                >
                                    <TableCell>{Math.round(restaurantStat.data["averagePrice"])}</TableCell>
                                    <TableCell>{restaurantStat.data["count"]}</TableCell>
                                    <TableCell>{restaurantStat.data["totalPrice"]}</TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <RestaurantHistory id={id}/>
            </div>
        </>
    );
}


export default RestaurantStats;