import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { activateAccountById, getAllAccounts, suspendAccountById, updateAccountById } from "../../../accountModule/services/account.service";
import EditIdentity from '../../../accountModule/components/EditIdentity/EditIdentity';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import './clientList.css';

function ClientList() {
    const [clientSource, setClientSource] = useState({ data: [], loading: false });
    const [activeUpdateClientModal, setActiveUpdateClientModal] = useState(false);
    const [clientSelected, setClientSelected] = useState(null);

    const fetchData = async () => {
        try {
            setClientSource({ data: [], loading: false });
            let response = await getAllAccounts();
            setClientSource({ data: response.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClientUpdate = (row) => {
        setClientSelected(row);
    }

    useEffect(() => {
        clientSelected && setActiveUpdateClientModal(true);
    }, [clientSelected]);

    const onAccountUpdate = async(data) => {
        setActiveUpdateClientModal(false);

        try {
            let userId = data.userId;
            await updateAccountById(userId, data);
            fetchData();
        } catch (error) {
            alert(error);
        }
    }

    const toggleAccountActive = async(row) => {
        try {
            let userId = row.userId;

            if(row.suspend) await activateAccountById(userId);
            else await suspendAccountById(userId);

            fetchData();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <h1 className='text-mainTitle'>Liste des clients</h1>

            <div className="w-full flex flex-row justify-center">
                {clientSource.loading &&
                    <TableContainer component={Paper} className='m-5' sx={{ maxHeight: 500, maxWidth: 1200 }}>
                        <Table size='small' aria-label="simple table">
                            <TableHead className='head' sx={{padding: 2}}>
                                <TableRow>
                                    <TableCell>Nom d'utilisateur</TableCell>
                                    <TableCell>Rôle</TableCell>
                                    <TableCell>Nom</TableCell>
                                    <TableCell align="right">Prénom</TableCell>
                                    <TableCell align="right">Actif</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clientSource.data.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        className='row'
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell onClick={() => handleClientUpdate(row)}>{row.username}</TableCell>
                                        <TableCell onClick={() => handleClientUpdate(row)}>{row.roleLabel}</TableCell>
                                        <TableCell onClick={() => handleClientUpdate(row)}>{row.lastname.toUpperCase()}</TableCell>
                                        <TableCell onClick={() => handleClientUpdate(row)} align="right">{row.firstname}</TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={() => toggleAccountActive(row)}>
                                                {row.suspend ?
                                                    <DoNotDisturbIcon sx={{ color: pink[500] }}/>
                                                    :
                                                    <CheckIcon color='success' />
                                                }
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                {clientSelected && 
                    <EditIdentity
                        open={activeUpdateClientModal}
                        data={clientSelected}
                        onCancel={() => setActiveUpdateClientModal(false)}
                        onIdentityUpdated={onAccountUpdate}>    
                    </EditIdentity>
                }
            </div>
        </>
    );
}


export default ClientList;