export enum AlertActionTypes {
    SET_ALERT = 'SET_ALERT'
}

interface SetAlertAction {
    type: AlertActionTypes.SET_ALERT,
    payload: string
}

export type AlertAction = SetAlertAction;

export interface AlertState {
    message: string;
}