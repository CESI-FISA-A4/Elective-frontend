import { TextField } from '@mui/material';
// import CustomButton from '../../utils/button';
// import { useState } from 'react';
import './profile.css';
import profileImg from '../../assets/profile.png';

function Profile() {

    // function handleSubmit(e) {
    //     e.preventDefault();
    // }

    return (
        // w-screen
        <div className='profile h-screen'>
            <div className="identity bg-greyColor">
                <img src={profileImg} alt="Img profile" />
                <h2>NOM Prenom</h2>
                <p>18 rue des licornes, Saint-Nazaire</p>
            </div>

            <div className="user-info bg-greyColor">
                <h2>Infos utilisateurs</h2>
                <TextField className="w-full" id="password" label="Mot de passe" variant="outlined" />
                <TextField className="w-full" id="new-password" label="Nouveau mot de passe" variant="outlined" />
                <TextField className="w-full" id="confirm-new-password" label="Confirmer nouveau mot de passe" variant="outlined" />
                <br />
                <h2>Autre section</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque laudantium enim sequi id quae aliquam odio, tenetur aliquid rerum quo asperiores consequuntur voluptatibus minus ea, quod incidunt dignissimos debitis reprehenderit.</p>
                <br />
                <h2>Danger zone</h2>
                
            </div>

            <div className="context-info bg-greyColor">
                <h2>Parrainage</h2>
                <p>Mon code : 1234613</p>
                <div className="flex flex-row">
                    <TextField className="w-full" id="mentor" label="Parrainer un ami" variant="outlined" />
                    <button>Search</button>
                </div>
            </div>

            {/* <form onSubmit={handleSubmit} className='w-1/2 flex flex-col items-center gap-y-3 '>
                    <TextField className="w-full" id="username" label="Nom d'utilisateur" variant="outlined"  onChange={(e) => {setUsername(e.target.value)}}/> 
                    <TextField className='w-full' id="password" label="Mot de passe" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    <CustomButton type="submit" children={"Connexion"}/>
                </form> */}
        </div>
    );
}

export default Profile;