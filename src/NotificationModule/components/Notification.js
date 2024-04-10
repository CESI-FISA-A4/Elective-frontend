import NotificationModal from "../../utils/components/Modal/NotificationModal/NotificationModal";
import { useNavigate } from 'react-router-dom';


export default function Notification(){
    const navigate = useNavigate();

    return(
        <NotificationModal title={"Livraison"} 
            content={"Votre livraison est en cours!"} 
            open={() => console.log('open !!')}
            onClose={() => navigate(-1)}
            onConfirm={() => navigate(-1)}>
        </NotificationModal>
    )
}