import { TextField } from '@mui/material';
import logo from '../../../assets/logo.svg';
import { useContext, useState } from 'react';
import { login } from '../../services/auth.service';
import CustomButton from '../../../utils/components/CustomButton';
import { Link } from 'react-router-dom';
import { NotificationContext } from '../../../contexts/NotificationProvider';

function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {test, setTest} = useContext(NotificationContext);

    function handleSubmit(e) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <div className='mt-10 w-screen flex flex-col items-center gap-y-6'>
            <img src={logo} alt='logo' className='w-1/2 sm:w-1/4'/>
            <h1 className='text-mainTitle'>Bienvenue sur CESI Eats</h1>

            <CustomButton onClick={() => setTest(!test)}>TEST CONTEXT</CustomButton>

            <form onSubmit={handleSubmit} className='w-1/2 flex flex-col items-center gap-y-3 '>
                <TextField className="w-full" id="username" label="Nom d'utilisateur" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}/> 
                <TextField className='w-full' id="password" label="Mot de passe" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <CustomButton type="submit" children={"Connexion"}/>
            </form>
            <Link to={'/signup'}>
                <p>Pas encore inscrit ? Cliquez pour aller sur la page d'inscription</p>
            </Link>
        </div>
  );
}

export default LogIn;