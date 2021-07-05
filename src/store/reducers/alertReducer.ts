import { AlertAction, AlertActionTypes, AlertState } from '../../types/alert';

const initialState: AlertState = {
    message: ''
};

export const alertReducer = (state: AlertState = initialState, action: AlertAction) => {
    switch (action.type) {
        case AlertActionTypes.SET_ALERT:
            return {message: action.payload};
        default:
            return state;
    }
};