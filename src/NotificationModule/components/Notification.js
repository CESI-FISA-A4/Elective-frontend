import NotificationModal from "../../utils/components/Modal/NotificationModal/NotificationModal";
import {Button} from '@mui/material'

export default function Notification({ notificationInfo, notificationModal}){
    function setNotificatonModal(modal){
        notificationModal = !modal;
    }
    return(
        <div>
            <NotificationModal title={notificationInfo.title} 
                content={notificationInfo.content} 
                open={notificationModal}
                onClose={() => setNotificatonModal(false)}
                onConfirm={() => setNotificatonModal(false)}>
            </NotificationModal>
        </div>
    )
}