import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { WeatherAction, WeatherActionTypes } from '../../types/weather';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather
`, {
                params: {
                    q: city,
                    appid: process.env.REACT_APP_API_KEY
                }
            });
            dispatch({type: WeatherActionTypes.GET_WEATHER, payload: res.data});
        } catch (error) {
            dispatch({type: WeatherActionTypes.SET_ERROR, payload: error.message});
        }
    };
};

export const setLoading = (): WeatherAction => {
    return {type: WeatherActionTypes.SET_LOADING};
};

export const setError = (): WeatherAction => {
    return {type: WeatherActionTypes.SET_ERROR, payload: ''}
}