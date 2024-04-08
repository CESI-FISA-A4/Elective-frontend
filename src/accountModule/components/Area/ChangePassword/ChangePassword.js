import { TextField } from '@mui/material';
import CustomButton from '../../../../utils/components/CustomButton';
import './changePassword.css';
import { useState } from 'react';
import { changePassword } from '../../../../authModule/services/auth.service';


function ChangePassword() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const resetAllFields = () => {
        setUsername("");
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }

    const handleChangePassword = async() => {
        if (username && password && newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                try {
                    await changePassword(username, password, newPassword);
                    alert("Mot de passe modifié avec succès");
                } catch (error) {
                    alert(error);
                }
            }
            else {
                alert("Mot de passes différents");
            }
        }
        else {
            alert("Tous les champs sont requis");
        }
        resetAllFields();
    }

    return (
        <div className="change-password">
            <h2 className='text-secondaryTitle p-2'>Infos utilisateurs</h2>

            <form onSubmit={(e) => e.preventDefault()}>
                <TextField size="small" className="w-full" value={username} onChange={(e) => setUsername(e.target.value)} id="username" label="Nom d'utilisateur" variant="outlined" />
                <TextField size="small" type="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Mot de passe" variant="outlined" />
                <TextField size="small" type="password" className="w-full" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} id="new-password" label="Nouveau mot de passe" variant="outlined" />
                <TextField size="small" type="password" className="w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirm-new-password" label="Confirmer nouveau mot de passe" variant="outlined" />
                <CustomButton onClick={handleChangePassword}>Modifier le mot de passe</CustomButton>
            </form>
        </div>
    );
}

export default ChangePassword;