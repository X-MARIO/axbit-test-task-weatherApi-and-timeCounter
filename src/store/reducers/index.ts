import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { weatherReducer } from './weatherReducer';
import { alertReducer } from './alertReducer';
import { timeReducer } from './timeReducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    weather: weatherReducer,
    alert: alertReducer,
    time: timeReducer
});

export type RootState = ReturnType<typeof rootReducer>