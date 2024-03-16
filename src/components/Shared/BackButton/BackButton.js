import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';


function BackButton({redirectPath="/"}) {
    const navigate = useNavigate();

    const redirect = () => {
        navigate({ pathname: redirectPath });
    }
    
    return (
        <IconButton color="primary" onClick={redirect}>
            <ArrowBackIcon fontSize="large" />
        </IconButton>
    );
}

export default BackButton;