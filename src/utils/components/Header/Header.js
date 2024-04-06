import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../../assets/LogoApp.svg';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../../contexts/MainPalette'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../authModule/services/auth.service';
import CustomButton from '../CustomButton';



export default function Header({ title }) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  }

  const goToSignup = () => {
    navigate("/signup");
  }

  const goToLogin = () => {
    navigate("/login");
  }

  const goToAccount = () => {
    navigate("/account");
  }

  const logoutUser = () => {
    logout();
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
              sx={{ mr: 1 / 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              startIcon={<Avatar src={logo} onClick={goToHome} />}
            >
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              {title}
            </Typography>
            <Stack direction="row" spacing={2}>
              <CustomButton variant="contained" onClick={goToSignup}>Sign Up</CustomButton>
              <CustomButton variant="contained" onClick={goToLogin}>Sign in</CustomButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="menu"
                sx={{ mr: 1 / 2 }}
                onClick={logoutUser}>
                <LogoutIcon></LogoutIcon>
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}