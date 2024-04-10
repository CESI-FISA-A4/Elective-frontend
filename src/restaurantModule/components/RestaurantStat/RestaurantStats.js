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

function RestaurantStats() {
    const { id } = useParams();
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
        console.log(id);
        // fetchData();
    }, []);

    return (
        <>
            <h1 className='text-mainTitle'>Statistiques restaurant</h1>

            <div className="w-full flex flex-row justify-center">
                    <TableContainer component={Paper} className='m-5' sx={{ maxHeight: 500, maxWidth: 1200 }}>
                        <Table size='small' aria-label="simple table">
                            <TableHead className='head' sx={{padding: 2}}>
                                <TableRow>
                                    <TableCell>Panier moyen</TableCell>
                                    <TableCell>Nombre de commandes</TableCell>
                                    <TableCell>Global</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    className='row'
                                >
                                    <TableCell>A</TableCell>
                                    <TableCell>B</TableCell>
                                    <TableCell>C</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </>
    );
}


export default RestaurantStats;