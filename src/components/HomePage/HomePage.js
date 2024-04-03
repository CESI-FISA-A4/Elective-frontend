import { ThemeProvider } from "@mui/material/styles";
import {theme} from '../../contexts/MainPalette' 
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header"
import { useNavigate } from 'react-router-dom';
import SearchBar from "../Searchbar/SearchBar";


function HomePage({ title }) {
    const navigate = useNavigate();

    const handleCallback = (data) => {
        console.log(data);
        navigate("/restaurant-list?texteFieldValue="+data
        )
        
    };

    return (
        <div>   
            <Header/>     
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
                        <SearchBar onSearchBarChange={handleCallback}/>
                    </Stack>
                    </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>

    )
}

export default HomePage;