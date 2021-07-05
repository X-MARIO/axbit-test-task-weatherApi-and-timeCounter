import { Dispatch } from 'redux';
import { CounterAction, CounterActionTypes } from '../../types/counter';

export const asyncIncrement = () => {
    return async (dispatch: Dispatch<CounterAction>) => {
        try {
            setTimeout(() => {
                dispatch({type: CounterActionTypes.INCREMENT});
            }, 1500);
        } catch (e) {
            console.error(e);
        }
    };
};

export const increment = (): CounterAction => {
    return {
        type: CounterActionTypes.INCREMENT
    };
};

export const decrement = (): CounterAction => {
    return {
        type: CounterActionTypes.DECREMENT
    };
};