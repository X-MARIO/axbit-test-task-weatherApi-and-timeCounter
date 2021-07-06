export enum TimeActionTypes {
    SET_TIME = 'SET_TIME'
}

interface SetTimeAction {
    type: TimeActionTypes.SET_TIME,
    payload: string
}

export type TimeAction = SetTimeAction;

export interface TimeState {
    time: string
}
