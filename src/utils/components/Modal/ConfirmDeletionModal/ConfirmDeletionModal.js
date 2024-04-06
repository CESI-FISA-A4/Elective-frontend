import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function ConfirmDeletionModal({open, onClose, onConfirm, title, content}) {
    return (
        <div className="ConfirmDeletionModal">
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className='bg-greenColor' sx={{padding:1}}>
                    {title}
                </DialogTitle>
                <DialogContent sx={{padding:4, marginY: 2}}>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="outlined" color="primary">Annuler</Button>
                    <Button onClick={onConfirm} variant="contained" color="error" autoFocus>Suppression</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmDeletionModal;
