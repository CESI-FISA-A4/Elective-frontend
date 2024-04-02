import { Button, TextField, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { signup } from "../../services/auth.service";



function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('USER');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password, firstname, lastname, role);
        signup(username, password, firstname, lastname, role);
    }


    return (
        <div>
            <img src={logo} alt='logo' onClick={handleSubmit}/>
            <h1>Bienvenue sur CESI Eats</h1>

            <form onSubmit={handleSubmit}>
                <TextField id="firstname" label="Prénom" variant="outlined"  onChange={(e) => {setFirstname(e.target.value)}}/>
                <TextField id="lastname" label="Nom" variant="outlined"  onChange={(e) => {setLastname(e.target.value)}}/>
                <TextField id="username_register" label="Nom d'utilisateur" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}/> 
                <TextField id="password_register" label="Mot de passe" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Rôle"
                    onChange={(e) => {setRole(e.target.value)}}
                >
                    <MenuItem value={'USER'}>Utilisateur</MenuItem>
                    <MenuItem value={'COMMERCIAL'}>Commercial</MenuItem>
                    <MenuItem value={'DELIVERYMAN'}>Livreur</MenuItem>
                </Select>
                <Button type="submit">Inscription</Button>
            </form>
        </div>
  );
}


export default SignUp;