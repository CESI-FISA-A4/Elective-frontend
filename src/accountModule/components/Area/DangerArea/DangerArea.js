import { Button } from '@mui/material';
import ConfirmDeletionModal from '../../../../utils/components/Modal/ConfirmDeletionModal/ConfirmDeletionModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../authModule/services/auth.service';


function DangerArea() {
    const [deleteModalActive, setDeleteModalActive] = useState(false);

    const handleDeleteAccount = () => {
        setDeleteModalActive(false);
        logout('/signup');
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