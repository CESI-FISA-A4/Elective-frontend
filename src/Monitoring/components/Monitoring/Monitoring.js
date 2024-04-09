import { getMonitoring } from "../../services/monitoring.service";
import MonitoringCard from "../MonitoringCard/MonitoringCard"
import { useState } from "react";

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


    return(
        <div className=" flex h-screen w-screen mt-10">
        
            <MonitoringCard name='test' address='test' port='test' state={false}/>
        </div>
    )
}