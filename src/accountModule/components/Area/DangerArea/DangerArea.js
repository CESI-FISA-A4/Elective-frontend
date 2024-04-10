import { Button } from '@mui/material';
import ConfirmDeletionModal from '../../../../utils/components/Modal/ConfirmDeletionModal/ConfirmDeletionModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../authModule/services/auth.service';
import { suspendAccountById } from '../../../services/account.service';


function DangerArea() {
    const [deleteModalActive, setDeleteModalActive] = useState(false);

    const handleDeleteAccount = async() => {
        setDeleteModalActive(false);

        try {
            let userId = localStorage.getItem("userId");
            await suspendAccountById(userId);
            logout('/signup');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="danger-area">
            <h2 className='text-secondaryTitle'>Danger zone</h2> 
            <br />  
            <Button variant="outlined" color="error" onClick={() => {setDeleteModalActive(true)}} autoFocus>Suppression du compte</Button>
            <ConfirmDeletionModal title={"Suppression compte"} 
                content={"Suppression définitive du compte ?"} 
                open={deleteModalActive}
                onClose={() => setDeleteModalActive(false)}
                onConfirm={handleDeleteAccount}>
            </ConfirmDeletionModal>
        </div>
    );
}


export default DangerArea;