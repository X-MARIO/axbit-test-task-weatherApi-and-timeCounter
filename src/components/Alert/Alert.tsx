import React from 'react';
import { Button } from '@material-ui/core';

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({message, onClose}): React.ReactElement => {
    return (
        <div>
            <div onClick={onClose}></div>
            <div>
                <header>
                    <p>{message}</p>
                </header>
                <footer>
                    <Button onClick={onClose}>Close</Button>
                </footer>
            </div>
        </div>
    );
};

export default Alert;