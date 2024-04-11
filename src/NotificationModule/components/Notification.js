import NotificationModal from "../../utils/components/Modal/NotificationModal/NotificationModal";


export default function Notification({ notificationInfo, isChanging, notificationModal, setNotificationModal}){
    return(
        <div>
            <NotificationModal title={notificationInfo.label} 
                content={notificationInfo.text} 
                isChanging={isChanging}
                open={notificationModal}
                onClose={() => setNotificationModal(false)}
                onConfirm={() => setNotificationModal(false)}>
            </NotificationModal>
        </div>
    )
}