import { useState, useEffect } from "react";
import NotificationModal from "../../utils/components/Modal/NotificationModal/NotificationModal";
import {Button} from '@mui/material'
import { getCommandeStates } from "../service/notification.service";
import notificationModel from "../../Model/NotificationModel/NotificationModel";

export default function Notification({ cmdId, cmdInprogr}){
    const [notificationModal, setNotificatonModal] = useState(false);
    const [cmdState, setCmdState] = useState(null); 
    const [notificationInfo, setNotificationInfo]= useState({});

    useEffect(() => {
        if (cmdInprogr){
            const fetchData = async () => {
                try {
                    let response = await getCommandeStates(cmdId);
                    if(notificationModal){
                        setNotificatonModal(false)
                    }
                    setNotificatonModal(true);
                    if(cmdState === undefined || response.data.status.state !== cmdState){
                        setCmdState(notificationModal.data.status.state);
                        const UserProfil = localStorage.getItem("roleLabel");
                        const info = notificationModel(UserProfil,  response.data.status.state);
                        setNotificationInfo(info);
                    }
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };
        
            fetchData();
            const interval = setInterval(() => {
                fetchData();
            }, 10000);
        
    
            return () => clearInterval(interval);
        }
        }, []);
        

    return(
        <div>
            <Button variant="outlined" color="error" onClick={() => {setNotificatonModal(true)}} autoFocus>Suppression du compte</Button>
            <NotificationModal title={notificationInfo.title} 
                content={notificationInfo.content} 
                open={notificationModal}
                onClose={() => setNotificatonModal(false)}
                onConfirm={() => setNotificatonModal(false)}>
            </NotificationModal>
        </div>
    )
}