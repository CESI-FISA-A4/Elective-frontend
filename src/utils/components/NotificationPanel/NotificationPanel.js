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
import { isDeliveryman, isRestaurantOwner } from '../../../authModule/services/auth.service';
import notificationModel from '../../../Model/NotificationModel/NotificationModel';
import { getCommandePreparedAvailable, getCommandePreparedCreated, getCommandePreparedDelivery } from '../../services/NotificationPanel.service';
import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import NotificationModal from '../Modal/NotificationModal/NotificationModal';



export default function NotificationPanel({ notifs }) {
    const [state, setState] = React.useState(false);
    const [notifications, setNotifications] = React.useState({ data: [], loading: false });
    const [notificationModal, setNotificationModal] = React.useState(false);
    let list;
    let count = 0;

    useEffect(() => {
        // setNotifications({data: notifs.data, loading: notifs.loading})
        setNotifications({ data: notifs["data"], loading: notifs["loading"] });
    }, [notifs]);

    <Alert icon={<CircularProgress />} variant="filled" severity="info">
        Aucune nouvelle commande en attente !
    </Alert>



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

    count = 117;

    // count = notifications.length;
    // console.log(notifications.data);
    list = () => (
        <Box className='p-5'
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            {notifications.data.length && notifications.data.map((notifcategory) => (
                notifcategory.data.map((element) =>
                    <div className={"hover:bg-bgGreyColor"} key={element.id}>
                        <button onClick={() => setNotificationModal(!notificationModal)}>
                            <p>
                                {`${notifcategory.type}: ${element.id}`}
                            </p>
                        </button>
                        <NotificationModal title={element.label}
                            content={element.text}
                            isChanging={true}
                            open={notificationModal}
                            onClose={() => setNotificationModal(false)}
                            onConfirm={() => setNotificationModal(false)}
                            refuseCallback={notifcategory.refuseFunction}
                            acceptCallback={notifcategory.acceptFunction}
                            id={element.id}>
                        </NotificationModal>
                    </div>
                )
            ))}
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
                    <NotificationsIcon sx={{ fontSize: 45 }} />
                    <p style={{ position: "absolute", alignItems: "center", color: "red", fontSize: 15, fontWeight: "bold" }}>{count}</p>
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