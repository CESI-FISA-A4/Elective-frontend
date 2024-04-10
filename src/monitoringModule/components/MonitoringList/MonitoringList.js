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

    const fetchData = async () => {
        try {
            setMonitoringSource({ data: [], loading: false });
            let response = await getMonitoring();
            setMonitoringSource({ data: response.data, loading: true });
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