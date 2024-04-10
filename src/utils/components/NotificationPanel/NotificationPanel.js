import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

export default function NotificationPanel() {
    const [state, setState] = React.useState(false);

    const notifications = [
        {label: "Notif #1", text: "Oui la notiff"},
        {label: "Notif #2", text: "Oui la notiff"},
        {label: "Notif #3", text: "Oui la notiff"},
        {label: "Notif #4", text: "Oui la notiff"},
        {label: "Notif #5", text: "Oui la notiff"},
        {label: "Notif #6", text: "Oui la notiff"},
        {label: "Notif #7", text: "Oui la notiff"},
        {label: "Notif #8", text: "Oui la notiff"},
        {label: "Notif #9", text: "Oui la notiff"},
        {label: "Notif #10", text: "Oui la notiff"},
    ]

    let count = 117;

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
                {notifications.map((link, index) => (
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
            <React.Fragment key={"right"}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 / 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <NotificationsIcon sx={{fontSize: 45}} />
                    <p style={{position: "absolute", alignItems: "center", color: "red", fontSize: 15, fontWeight: "bold"}}>{count}</p>
                </IconButton>
                <SwipeableDrawer
                    anchor={"right"}
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
