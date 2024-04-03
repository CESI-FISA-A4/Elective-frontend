import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/LogoApp.svg';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import {theme} from '../../contexts/MainPalette' 
import { useNavigate } from 'react-router-dom';



export default function Header({ title }) {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/HomePage");
  }

return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="greenColor" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1/2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
          startIcon={<Avatar src={logo} onClick={handleClick} />}
        >
        </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
           { title }
          </Typography>
          <Stack direction="row" spacing={2}>
          <Button variant="contained" color="blackButtonColor"  >Sign Up</Button>
          <Button variant="contained" color="blackButtonColor" >Sign in</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
