import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const mainLinks = [
        { path: "/restaurants", text: "Rechercher un restaurant", icon: <RestaurantIcon /> },
        { path: "/account", text: "Compte", icon: <AccountCircleIcon /> },
        { path: "/contact", text: "Contact", icon: <EmailIcon /> },
    ];

    let additionnalLinks = [];

    let roleLabel = localStorage.getItem("roleLabel");

    switch (roleLabel) {
        case "restaurantOwner":
            additionnalLinks = [{ path: "/restaurants/owner", text: "Mes restaurants", icon: <FoodBankIcon /> }];
            break;
        case "deliveryman":
            additionnalLinks = [{ path: "/restaurants", text: "Réception des commandes", icon: <BorderColorIcon /> }];
            break;
        case "salesman":
            additionnalLinks = [{ path: "/clients", text: "Liste des clients", icon: <PeopleIcon /> }, { path: "/restaurants", text: "Statut des commandes", icon: <QueryStatsIcon /> }];
            break;
        case "technician":
        case "developer":
            additionnalLinks = [{ path: "/restaurants", text: "Git", icon: <GitHubIcon /> }, { path: "/restaurants", text: "Statistiques", icon: <QueryStatsIcon /> }];
            break;
    }
    // const restaurantLinks 

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {mainLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={link.path}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {additionnalLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={link.path}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 / 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor={"left"}
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list()}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
