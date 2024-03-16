import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function ConfirmDeletion({open, onClose, onConfirm, title, content}) {
    return (
        <div className="ConfirmDeletion">
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
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

export default ConfirmDeletion;
