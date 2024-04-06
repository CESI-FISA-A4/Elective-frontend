import { TextField } from '@mui/material';
import CustomButton from '../../../utils/components/CustomButton';
import './changePassword.css';


function ChangePassword() {

    return (
        <div className="change-password">
            <form onSubmit={(e) => e.preventDefault()}>
                <TextField size="small" className="w-full" id="password" label="Mot de passe" variant="outlined" />
                <TextField size="small" className="w-full" id="new-password" label="Nouveau mot de passe" variant="outlined" />
                <TextField size="small" className="w-full" id="confirm-new-password" label="Confirmer nouveau mot de passe" variant="outlined" />
                <CustomButton>Modifier le mot de passe</CustomButton>
            </form>
        </div>
    );
}

export default ChangePassword;