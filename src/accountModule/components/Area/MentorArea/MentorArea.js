import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function MentorArea() {
    return (
        <div className="mentor-area">
            <h2 className='text-secondaryTitle p-2'>Parrainage</h2>
            <p className='text-standard'>Mon code : 1234613</p>
            <div className="flex flex-row">
                <TextField className="w-full" id="mentor" label="Parrainer un ami" variant="outlined" size="small" />
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
            </div>
        </div>
    );
}


export default MentorArea;