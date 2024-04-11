import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../../assets/LogoApp.svg';
import accountImg from '../../../assets/account.png';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../../contexts/MainPalette'
import { useNavigate } from 'react-router-dom';
import { isDeliveryman, isRestaurantOwner, isUser, logout } from '../../../authModule/services/auth.service';
import CustomButton from '../CustomButton';
import './header.css';
import SwipeableTemporaryDrawer from '../Drawer/Drawer';
import NotificationPanel from '../NotificationPanel/NotificationPanel';



export default function Header({ isAuthenticate }) {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = React.useState(isAuthenticate);

  React.useEffect(() => {
    setIsAuth(isAuthenticate);
  }, [isAuthenticate]);

  const goToHome = () => {
    navigate("/restaurants");
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
            <SwipeableTemporaryDrawer />
            <Button
              startIcon={<Avatar src={logo} onClick={goToHome} />}
            >
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              {null}
            </Typography>
            <Stack direction="row" spacing={2}>
              {!isAuth && <CustomButton variant="contained" onClick={goToSignup}>Sign Up</CustomButton>}
              {!isAuth && <CustomButton variant="contained" onClick={goToLogin}>Sign in</CustomButton>}

              {isAuth &&
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="menu"
                  sx={{ mr: 1 / 2 }}
                  onClick={logoutUser}>
                  <LogoutIcon></LogoutIcon>
                </IconButton>
              }
              {isAuth && <img id="header-account" src={accountImg} width="50" height="50" alt="account" onClick={goToAccount} />}
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}