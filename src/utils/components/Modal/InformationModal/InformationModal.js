import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function InformationModal({open, onConfirm, title, content, textConfirm, colorConfirm}) {
    return (
        <div className="InformationModal">
            <Dialog
                open={open}
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
                    <Button onClick={onConfirm} variant="contained" color={colorConfirm} autoFocus>{textConfirm}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default InformationModal;