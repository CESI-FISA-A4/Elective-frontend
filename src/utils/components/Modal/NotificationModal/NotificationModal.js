import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';

function NotificationModal({ open, onClose, title, content, isChanging, acceptCallback, refuseCallback, id }) {
   
    const onCancelButton = async () => {
        console.log("callback :",refuseCallback, "id : ", id);
        await refuseCallback(id);
        onClose();
    }
    const onAcceptButton = async () => {
        console.log("accept");
        console.log("callback :",acceptCallback, "id : ", id)
        await acceptCallback(id);
        onClose();
    }
    return (
        <div className="NotificationModal">
            <Dialog className=''
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className='text-center bg-greenColor' sx={{ padding: 1 }}>
                    {title}
                </DialogTitle>
                <DialogContent sx={{ padding: 4, marginY: 2 }}>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {isChanging ? <Button onClick={onCancelButton} variant="outlined" color="error">Annuler</Button> : null}
                    <Button onClick={onAcceptButton} variant="outlined" color="primary">Confirmer</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NotificationModal;
