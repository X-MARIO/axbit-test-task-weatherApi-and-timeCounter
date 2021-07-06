import { TimeAction, TimeActionTypes } from '../../types/time';

export const setTime = (): TimeAction => {
    return {
        type: TimeActionTypes.SET_TIME,
        payload: new Date().toLocaleTimeString()
    };
};