import { CurrentWeatherState, WeatherAction, WeatherActionTypes } from '../../types/weather';

const initialState: CurrentWeatherState = {
    data: null,
    loading: false,
    error: ''
};

export const weatherReducer = (state: CurrentWeatherState = initialState, action: WeatherAction): CurrentWeatherState => {
    switch (action.type) {
        case WeatherActionTypes.GET_WEATHER:
            return {data: action.payload, loading: false, error: ''};
        case WeatherActionTypes.SET_LOADING:
            return {...state, loading: true};
        case WeatherActionTypes.SET_ERROR:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }

};