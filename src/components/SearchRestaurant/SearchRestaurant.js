import { ThemeProvider } from "@mui/material/styles";
import {theme} from '../../contexts/MainPalette' 
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";


function SearchRestaurant({ title }) {


    return (
        <div>
            <ThemeProvider theme={theme}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
            >
            <Grid item xs={3}>
                <Stack direction="column" spacing={2} alignItems="center">
                <Paper component="form"sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 750 }}>
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
                </Paper>
                </Stack>
                </Grid>
                </Grid>
            </ThemeProvider>
        </div>
     
    )
}

export default SearchRestaurant;