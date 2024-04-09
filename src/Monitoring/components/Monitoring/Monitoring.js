import { getMonitoring } from "../../services/monitoring.service";
import MonitoringCard from "../MonitoringCard/MonitoringCard"
import { useState, useEffect } from "react";

export default function MonitoringGeneral(){

    const [monitoringInfo, setMonitoringInfo] = useState({ data: {}, loading: false });

    const fetchAccount = async () => {
        try {
            setMonitoringInfo({ data: {}, loading: false });
            let response = await getMonitoring();
            setMonitoringInfo({ data: response.data, loading: true });

        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        fetchAccount();
    }, []);

    return(
        <div className=" flex h-screen w-screen mt-10">
        {monitoringInfo.loading && monitoringInfo.data.map(MonitoringData => (
            <MonitoringCard name={MonitoringData.name} address={MonitoringData.address} port={MonitoringData.port} state={MonitoringData.state} endPoint={MonitoringData.endPoint}/>
        ))}
        </div>
    )
}