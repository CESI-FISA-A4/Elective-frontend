import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TextField } from "@mui/material";
import { Box, DialogActions, Checkbox  } from '@mui/material';
import CustomButton from '../../../utils/components/CustomButton';


function EditRestaurant({title="Formulaire restaurant", restaurant=null, onRestaurantEdited}) {
    const [imgUrl, setImgUrl] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [acceptTicket, setAcceptTicket] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(imgUrl && name && description && address){
            let data = {imgUrl, name, description, address, acceptTicket}
            onRestaurantEdited(data);
        }
        else{
            alert("All fields are required");
        }
    }

    useEffect(() => {
        if(restaurant){
            setImgUrl(restaurant.imgUrl);
            setName(restaurant.name);
            setDescription(restaurant.description);
            setAddress(restaurant.address);
            setAcceptTicket(restaurant.acceptTicket);
        }
    }, [restaurant]);

    return (
        <div className="edit-restaurant">
            <form onSubmit={handleSubmit}>
                <Box className='flex flex-col gap-4 py-2 m-10'>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <TextField className="w-full" id="imgUrl" label="URL de l'image" variant="outlined" value={imgUrl} onChange={(e) => {setImgUrl(e.target.value)}} />
                    <TextField className="w-full" id="name" label="Nom" variant="outlined" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <TextField className="w-full" id="address" label="Adresse" variant="outlined" value={address} onChange={(e) => {setAddress(e.target.value)}} />
                    <TextField className="w-full" id="description" label="Description" variant="outlined" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                    <Typography variant="body2" color="text.secondary">
                        Tickets restaurant acceptés ?
                        <Checkbox label="Tickets restaurant acceptés" checked={acceptTicket} onChange={(e) => {setAcceptTicket(e.target.checked)}} inputProps={{ 'aria-label': 'controlled' }} />
                    </Typography>
                    <DialogActions>
                        <CustomButton type={"submit"}>Valider</CustomButton>
                    </DialogActions>
                </Box>
            </form>
        </div>
    );
}


export default EditRestaurant;