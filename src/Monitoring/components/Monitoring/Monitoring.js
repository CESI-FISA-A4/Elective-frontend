import { Grid } from "@mui/material";
import { getMonitoring } from "../../services/monitoring.service";
import MonitoringCard from "../MonitoringCard/MonitoringCard"
import { useState, useEffect } from "react";

export default function MonitoringGeneral() {
    const [monitoringInfo, setMonitoringInfo] = useState({ data: {}, loading: false });

    useEffect(() => {
        const fetchMonitoring = async () => {
            try {
                setMonitoringInfo({ data: {}, loading: false });
                let response = await getMonitoring();
                setMonitoringInfo({ data: response.data, loading: true });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        //  premier call
        fetchMonitoring()
        // refresh ttes les 10secs
        const interval = setInterval(() => {
            fetchMonitoring();
        }, 10000);


        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" flex h-screen w-screen mt-10">
            <Grid container alignItems="stretch">
                {monitoringInfo.loading && monitoringInfo.data.map(MonitoringData => (
                    <Grid item style={{ display: 'flex', padding: 4 }}>
                        <MonitoringCard name={MonitoringData.name} address={MonitoringData.host} port={MonitoringData.port} state={MonitoringData.isAvailable} endPoint={MonitoringData.endpoint} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}