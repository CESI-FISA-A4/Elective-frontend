import { TextField } from '@mui/material';
import CustomButton from '../../utils/button';
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
        <div className='w-screen flex flex-col items-center gap-y-6'>
            <img src={logo} alt='logo' className='w-1/2 sm:w-1/4'/>
            <h1 className='text-mainTitle'>Bienvenue sur CESI Eats</h1>

            <form onSubmit={handleSubmit} className='w-1/2 flex flex-col items-center gap-y-3 '>
                <TextField className="w-full" id="username" label="Nom d'utilisateur" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}/> 
                <TextField className='w-full' id="password" label="Mot de passe" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <CustomButton type="submit" children={"Connexion"}/>
            </form>
        </div>
  );
}

export default LogIn;