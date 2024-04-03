import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function HomePage({ title }) {
    return (
        <div className="h-screen flex items-center justify-center ">
                <TextField
                    id="outlined-secondary"
                    label={ title }
                    variant="outlined"
                    color="secondary"
                    sx={{ width: 700 }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
        </div>
    )
}

export default HomePage;