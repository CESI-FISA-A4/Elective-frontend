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
    import Alert from'@mui/material/Alert';
    import CircularProgress from '@mui/material/CircularProgress';
    import NotificationModal from '../Modal/NotificationModal/NotificationModal';
    


    export default function NotificationPanel() {
        const [state, setState] = React.useState(false);
        const [commandeState, setCommandeState] = React.useState();
        const [openItemLabel, setOpenItemLabel] = React.useState('');
        const [notificationModal, setNotificationModal] = React.useState(false);
        let notifications = [];
        let list;
        let count = 0;
        let etapes = '';
        let choice = false;
        useEffect(() => {
            const fetchData = async () => {
                try {
                    if (isDeliveryman()){
                        console.log('test');
                        if(commandeState === undefined){
                            let NewLivraison = await getCommandePreparedDelivery();
                            setCommandeState(NewLivraison.data);
                            console.log("NewLivraison = " + NewLivraison.data)
                        if(NewLivraison.data.length !== 0){
                            notifications.push(notificationModel('deliveryman', 'NewLivraison'));
                        }
                        etapes = 'newLiv';
                        }else{
                            let ReadyToDelivers = await getCommandePreparedAvailable();
                            setCommandeState(ReadyToDelivers.data);
                            console.log("ReadyToDelivers = " + ReadyToDelivers.data)
                            if(ReadyToDelivers.data.length !== 0){
                                notifications.push(notificationModel('deliveryman', 'ReadyToDelivers'));
                            }
                        }
                    }else if(isRestaurantOwner()){
                        let NewCommand = await getCommandePreparedCreated();
                        setCommandeState( NewCommand.data);
                        console.log("NewCommand = " + NewCommand.data)
                        if( NewCommand.data.length !== 0){
                            notifications.push(notificationModel('restaurantOwner', 'NewCommand'));
                        }
                        etapes = 'newCmd';
                    }
                    isChanging();
                }  catch (error) {
                    console.log(error);
                }
            }
            
            function isChanging(){
                if (etapes == 'newCmd' || etapes == 'newLiv'){
                    choice = true;
                }
            }

            fetchData();
            const interval = setInterval(() => {
                fetchData();
            }, 5000);
        

            return () => clearInterval(interval);
        }, []);
            
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
   

        const test = [
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
    
        count = 117;
   
        // count = notifications.length;

        list = () => (
            <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                {test.map((element) => ( 
                    <div className={"hover:bg-bgGreyColor"} key={element.label}>
                        <button onClick={() => setNotificationModal(!notificationModal)}> 
                            <p>
                            {element.text}
                            </p>
                             </button>                  
                             <NotificationModal title={element.label} 
                                content={element.text} 
                                isChanging={true}
                                open={notificationModal}
                                onClose={() => setNotificationModal(false)}
                                onConfirm={() => setNotificationModal(false)}>
                         </NotificationModal>
                    </div>
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