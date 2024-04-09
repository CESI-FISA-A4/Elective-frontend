import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem} from '@mui/material';
import CustomButton from '../../../utils/components/CustomButton';

function Contact () {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (firstname === '' || lastname === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs');
            return;
        }
        window.location.href = "mailto:contact@cesi-eats.fr?subject=Contact%20CESI%20Eats&body=Prénom%20:%20" + firstname + "%0ANom%20:%20" + lastname + "%0AEmail%20:%20" + email + "%0AMessage%20:%20" + message + "%0A";
        alert('email prêt pour envoi ! Veuillez valider l\'envoi dans la fenêtre qui vient de s\'ouvrir !');
    }

    return (
        <div>
            <h1 className='text-mainTitle'>Nous contacter</h1>
            <form className='m-10 flex flex-col items-center gap-y-6'> 
                <div className='w-full flex flex-row items-center justify-center gap-6'>
                    <TextField className='w-11/12' required id="firstname" label="Prénom" variant="outlined"  onChange={(e) => {setFirstName(e.target.value)}}/>
                    <TextField className='w-11/12' required id="lastname" label="Nom" variant="outlined"  onChange={(e) => {setLastName(e.target.value)}}/>
                </div>
                <TextField className='w-full' required id="email" label="Email" variant="outlined" onChange={(e) => {setEmail(e.target.value)}}/>
                <TextField className='w-full' multiline maxRows={10} required id="message" label="Message" variant="outlined"  onChange={(e) => {setMessage(e.target.value)}}/>

                <CustomButton type="submit" onClick={handleSubmit}>Envoyer</CustomButton>
            </form>
        </div>
  );
}

export default Contact;