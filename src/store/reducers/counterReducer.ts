import { CounterAction, CounterActionTypes, CounterState } from '../../types/counter';

const initialState: CounterState = {
    count: 0
};

export const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return {...state, count: state.count + 1};
        case CounterActionTypes.DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};