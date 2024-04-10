import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import { getMonitoring } from '../../services/monitoring.service';
import './monitoringList.css';

function MonitoringList() {
    const [monitoringSource, setMonitoringSource] = useState({ data: [], loading: false });

    const areArrayDifferent = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return true;
        }
    
        arr1.sort((a, b) => JSON.stringify(a) > JSON.stringify(b) ? 1 : -1);
        arr2.sort((a, b) => JSON.stringify(a) > JSON.stringify(b) ? 1 : -1);
    
        for (let i = 0; i < arr1.length; i++) {
            if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
                return true;
            }
        }
    
        return false;
    }

    const fetchData = async () => {
        try {
            let response = await getMonitoring();
            if(areArrayDifferent(monitoringSource.data, response.data)) setMonitoringSource({ data: response.data, loading: true });
            else setMonitoringSource({ data: monitoringSource.data, loading: true });
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1 className='text-mainTitle'>Monitoring</h1>

            <div className="w-full flex flex-row justify-center">
                {monitoringSource.loading &&
                    <TableContainer component={Paper} className='m-5' sx={{ maxHeight: 500, maxWidth: 1200 }}>
                        <Table size='small' aria-label="simple table">
                            <TableHead className='head' sx={{ padding: 2 }}>
                                <TableRow>
                                    <TableCell>Nom du service</TableCell>
                                    <TableCell>Hôte</TableCell>
                                    <TableCell>Port</TableCell>
                                    <TableCell align="right">Endpoint</TableCell>
                                    <TableCell align="right">Disponible</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {monitoringSource.data.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        className='row'
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.host}</TableCell>
                                        <TableCell>{row.port}</TableCell>
                                        <TableCell align="right">{row.endpoint}</TableCell>
                                        <TableCell align="right">
                                            <IconButton>
                                                {!row.isAvailable ?
                                                    <DoNotDisturbIcon sx={{ color: pink[500] }} />
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
            </div>
        </>
    );
}


export default MonitoringList;