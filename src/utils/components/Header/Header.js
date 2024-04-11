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
import { getCommandePreparedAvailable, getCommandePreparedCreated, getCommandePreparedDelivery, PostAbortCommandResto, PostDeliveryOk, PostRestoOk } from '../../services/NotificationPanel.service';



export default function Header({ isAuthenticate }) {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = React.useState(isAuthenticate);
  const [notifs, setNotifs] = React.useState({ data: [], loading: false });
  const navigateToOrder = async (id) => {
    return navigate(`/orders/${id}`);
  }
  const fetchDataRestaurant = async () => {
    try {
      const response = await Promise.all([getCommandePreparedCreated()]);
      response[0]["acceptFunction"] = PostRestoOk;
      response[0]["refuseFunction"] = PostAbortCommandResto;
      response[0]["type"] = "Nouvelle Commande";
      response[0]["text"] = "Voulez vous acceptez cette commande ?"
      setNotifs({ data: response, loading: false })
    } catch (error) {
      alert(error);
    }
  }
  const fetchDataDeliveryman = async () => {
    try {
      const response = await Promise.all([getCommandePreparedDelivery(), getCommandePreparedAvailable()]);
      response[0]["acceptFunction"] = navigateToOrder;
      response[0]["refuseFunction"] = async() => { };
      response[0]["type"] = "Commande Prête";
      response[0]["text"] = "La commande est prête a être livrée !"
      response[1]["acceptFunction"] = PostDeliveryOk;
      response[1]["refuseFunction"] = async() => { };
      response[1]["type"] = "Nouvelle Commande";
      response[1]["text"] = "Voulez vous acceptez cette commande ?"

      setNotifs({ data: response, loading: false })
      // console.log(response);
    } catch (error) {
      alert(error);
    }
  }
  React.useEffect(() => {
    setIsAuth(isAuthenticate);
    let interval;
    if (isDeliveryman()) {
      interval = setInterval(() => {
        fetchDataDeliveryman();
      }, 10000);
    }
    if (isRestaurantOwner()) {
      interval = setInterval(() => {
        fetchDataRestaurant();
      }, 10000);
    }

    return () => clearInterval(interval);
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
              {isAuth && (isRestaurantOwner() || isDeliveryman()) && <NotificationPanel notifs={notifs} />}
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