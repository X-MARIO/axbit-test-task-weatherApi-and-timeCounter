export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

interface OnIncrementAction {
    type: CounterActionTypes.INCREMENT;
}

interface OnDecrementAction {
    type: CounterActionTypes.DECREMENT;
}

export type CounterAction = OnIncrementAction | OnDecrementAction;

export interface CounterState {
    count: number;
}