import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DialogActions, Button } from '@mui/material';
import ConfirmDeletionModal from '../../../utils/components/Modal/ConfirmDeletionModal/ConfirmDeletionModal';
import { useState } from 'react';
import { deleteRestaurantById } from '../../services/restaurant.service';
import { useNavigate } from 'react-router-dom';
import './restaurant.css';


function Restaurant({ data, onRestaurantUpdated, enableUpdate }) {
    const [deleteModalActive, setDeleteModalActive] = useState(false);
    const navigate = useNavigate();

    const handleDeleteRestaurant = async () => {
        setDeleteModalActive(false);
        try {
            await deleteRestaurantById(data._id);
            onRestaurantUpdated();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Card className='restaurant' onClick={navigate(`/restaurants/${data._id}`)}>
            <CardMedia
                component="img"
                height="140"
                srcSet={data.imgUrl}
                alt={data.name}
            />
            <CardContent className='content'>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
            </CardContent>
            {enableUpdate &&
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={() => navigate(`/restaurants/update/${data._id}`)}>Modifier</Button>
                    <Button variant="contained" color="error" autoFocus onClick={() => setDeleteModalActive(true)}>Suppression</Button>
                </DialogActions>
            }
            <ConfirmDeletionModal title={"Suppression restaurant"}
                content={"Suppression définitive de ce restaurant ?"}
                open={deleteModalActive}
                onClose={() => setDeleteModalActive(false)}
                onConfirm={handleDeleteRestaurant}>
            </ConfirmDeletionModal>
        </Card>
    );
}


export default Restaurant;