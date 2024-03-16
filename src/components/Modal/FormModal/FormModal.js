import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function FormModal({open, onClose, onApply, title, children, applyButtonContent="Valider", action=false}) {
    return (
        <div className="FormModal">
            <Dialog
                fullWidth
                maxWidth="xs"
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle className="text-2xl">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {children}
                    </DialogContentText>
                </DialogContent>
                {action &&
                    <DialogActions>
                        <Button onClick={onClose} variant="outlined" color="inherit">Annuler</Button>
                        <Button onClick={onApply} variant="contained" color="primary" autoFocus>{applyButtonContent}</Button>
                    </DialogActions>
                }
            </Dialog>
        </div>
    );
}

export default FormModal;
