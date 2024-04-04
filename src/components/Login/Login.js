import { Button, TextField } from '@mui/material';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { login } from '../../services/auth.service';

function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <div>
            <img src={logo} alt='logo'/>
            <h1>Bienvenue sur CESI Eats</h1>

            <form onSubmit={handleSubmit}>
                <TextField id="username" label="Nom d'utilisateur" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}/> 
                <TextField id="password" label="Mot de passe" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <Button type="submit">Connexion</Button>
            </form>
        </div>
  );
}

export default LogIn;