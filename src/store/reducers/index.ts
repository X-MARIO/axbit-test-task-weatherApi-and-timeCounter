import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { weatherReducer } from './weatherReducer';
import { alertReducer } from './alertReducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    weather: weatherReducer,
    alert: alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>