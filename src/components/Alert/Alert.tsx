import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({message, onClose}): React.ReactElement => {
    const open = message ? true : false;
    return (
        <Dialog open={open} aria-labelledby={'form-dialog-title'}>
            <DialogTitle id={'dialog'} color={'error'}>Внимание!</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
                <DialogActions>
                    <Button color={'secondary'} onClick={onClose}>Close</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default Alert;