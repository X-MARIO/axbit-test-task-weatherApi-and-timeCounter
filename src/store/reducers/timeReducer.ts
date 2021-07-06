import { TimeAction, TimeActionTypes, TimeState } from '../../types/time';

const initialState: TimeState = {
    time: new Date().toLocaleTimeString()
};

export const timeReducer = (state: TimeState = initialState, action: TimeAction): TimeState => {
    switch (action.type) {
        case TimeActionTypes.SET_TIME:
            return {...state, time: action.payload};
        default:
            return state;
    }
};