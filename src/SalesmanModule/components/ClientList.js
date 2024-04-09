import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useEffect, useState } from "react";
import { getAllAccounts } from "../../accountModule/services/account.service";
import './clientList.css';

function ClientList() {
    const [clientSource, setClientSource] = useState({ data: [], loading: false });

    const fetchData = async () => {
        try {
            setClientSource({ data: [], loading: false });
            let response = await getAllAccounts();
            console.log(response);
            setClientSource({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1 className='text-mainTitle'>Liste des clients</h1>

            <div className="w-full flex flex-row justify-center">
                {clientSource.loading &&
                    <TableContainer component={Paper} className='m-5' sx={{ maxHeight: 500, maxWidth: 700 }}>
                        <Table size='small' aria-label="simple table">
                            <TableHead className='head'>
                                <TableRow>
                                    <TableCell>Nom d'utilisateur</TableCell>
                                    <TableCell>Rôle</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell align="right">Prénom</TableCell>
                                    <TableCell align="right">Suspension de compte ?</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clientSource.data.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        className='row'
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.username}</TableCell>
                                        <TableCell>{row.roleLabel}</TableCell>
                                        <TableCell>{row.lastname.toUpperCase()}</TableCell>
                                        <TableCell align="right">{row.firstname}</TableCell>
                                        <TableCell align="right">
                                            <Checkbox
                                            color="primary"
                                            indeterminate={false}
                                            checked={row.suspend}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </div>
        </>
    );
}


export default ClientList;