import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function NotificationModal({open, onClose, title, content, isChanging, ChangeStateCallBack}) {
    return (
        <div className="NotificationModal">
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className='text-center bg-greenColor' sx={{padding:1}}>
                    {title}
                </DialogTitle>
                <DialogContent sx={{padding:4, marginY: 2}}>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                {isChanging ? <Button onClick={ChangeStateCallBack} variant="outlined" color="error">Annuler</Button> : null }
                <Button onClick={onClose} variant="outlined" color="primary">Confirmer</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NotificationModal;
