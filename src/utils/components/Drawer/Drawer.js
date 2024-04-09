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

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const mainLinks = [
        { text: "Rechercher un restaurant", icon: <RestaurantIcon /> },
        { text: "Compte", icon: <AccountCircleIcon /> },
        { text: "Contact", icon: <EmailIcon /> },
    ];

    let additionnalLinks = [];

    let roleLabel = localStorage.getItem("roleLabel");

    switch (roleLabel) {
        case "restaurantOwner":
            additionnalLinks = [{ text: "Mes restaurants", icon: <FoodBankIcon /> }];
            break;
        case "deliveryman":
            additionnalLinks = [{ text: "Réception des commandes", icon: <BorderColorIcon /> }];
            break;
        case "salesman":
            additionnalLinks = [{ text: "Liste des clients", icon: <PeopleIcon /> }, { text: "Statut des commandes", icon: <QueryStatsIcon /> }];
            break;
        case "technician":
        case "developer":
            additionnalLinks = [{ text: "Git", icon: <GitHubIcon /> }, { text: "Statistiques", icon: <QueryStatsIcon /> }];
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
                        <ListItemButton>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {additionnalLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItemButton>
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
