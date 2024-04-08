import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem} from '@mui/material';
import { submitContact } from '../../services/contact.service';

function Contact () {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        if (firstname === '' || lastname === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs');
            return;
        }
        alert('Confirmez l\'envoi du formulaire de contact');
        e.preventDefault();
        submitContact(firstname, lastname, email, message);
        console.log(firstname, lastname, email, message);
    }

    return (
        <div>
            <h1>Contact</h1>
            <form> 
                <TextField required id="firstname" label="Prénom" variant="outlined"  onChange={(e) => {setFirstName(e.target.value)}}/>
                <TextField required id="lastname" label="Nom" variant="outlined"  onChange={(e) => {setLastName(e.target.value)}}/>
                <TextField required id="email" label="Email" variant="outlined" onChange={(e) => {setEmail(e.target.value)}}/>
                <TextField required id="message" label="Message" variant="outlined"  onChange={(e) => {setMessage(e.target.value)}}/>

                <Button type="submit" onClick={handleSubmit}>Envoyer</Button>
            </form>
        </div>
  );
}

export default Contact;