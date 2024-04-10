import { TextField, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../../assets/logo.svg";
import { getRoles, signup } from "../../services/auth.service";
import CustomButton from "../../../utils/components/CustomButton";
import { Link } from "react-router-dom";
import { camelCaseToSentence } from "../../../utils/services/utils.service";


function SignUp() {
    const [roleSource, setRoleSource] = useState({data: [], loading: false});

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('user');
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchRoles = async() => {
            setRoleSource({data: [], loading: false});
            let response = await getRoles();
            setRoleSource({data: response.data, loading: true});
        } 

        fetchRoles();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        let address = street + ' ' + postalCode + ' ' + city;
        signup(username, password, firstname, lastname, role, address);
    }

    return (
        <div className='mt-10 w-screen flex flex-col items-center gap-y-6'>
            <img src={logo} alt='logo' onClick={handleSubmit}/>
            <h1 className='text-mainTitle'>Bienvenue sur CESI Eats</h1>

            <form className='w-1/2 flex flex-col items-center gap-y-3' onSubmit={handleSubmit}>
                <div className='w-full flex flex-row space-x-5 place-content-between'>                           
                    <TextField className="w-11/12" id="firstname" label="Prénom" variant="outlined"  onChange={(e) => {setFirstname(e.target.value)}}/>
                    <TextField className='w-11/12' id="lastname" label="Nom" variant="outlined"  onChange={(e) => {setLastname(e.target.value)}}/>
                </div>
                <TextField className='w-full' id="street" label="Numéro et rue" variant="outlined"  onChange={(e) => {setStreet(e.target.value)}}/>
                <div className='w-full flex flex-row space-x-5 place-content-between'>
                    <TextField className='w-11/12' id='postalCode' label='Code postal' variant='outlined' type="number" onChange={(e) => setPostalCode(e.target.value)}/>
                    <TextField className='w-11/12' id='city' label='Ville' variant='outlined' onChange={(e) => setCity(e.target.value)}/>
                </div>
                
                <TextField className='w-full' id="username_register" label="Nom d'utilisateur" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}/> 
                <TextField className='w-full' id="password_register" label="Mot de passe" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <TextField className='w-full' id="confirmPassword" label="Confirmer le mot de passe" variant="outlined" type="password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                <div className='flex flex-row w-full items-center'>
                    <p className="w-1/4 text-left">Role :</p>
                    <Select
                        className='w-3/4' labelId="demo-simple-select-label" id="demo-simple-select" value={role} label="Rôle" onChange={(e) => {setRole(e.target.value)}}>
                        {roleSource.loading && 
                            roleSource.data.map((role, index) => {
                                return <MenuItem key={index} value={role.label}>{camelCaseToSentence(role.label)}</MenuItem>
                            })
                        }
                    </Select> 
                </div>
                <CustomButton type="submit" children={"Inscription"}/>
            </form>
            <Link to={'/login'}>
                <p>Déjà inscrit ? Retourner à la page de connexion</p>
            </Link>
        </div>
  );
}


export default SignUp;