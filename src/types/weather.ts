export enum WeatherActionTypes {
    GET_WEATHER = 'GET_WEATHER',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
}

interface GetWeatherAction {
    type: WeatherActionTypes.GET_WEATHER,
    payload: ICurrentWeatherData
}

interface SetLoadingAction {
    type: WeatherActionTypes.SET_LOADING
}

interface SetErrorAction {
    type: WeatherActionTypes.SET_ERROR,
    payload: string
}

export type  WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
}

export interface ICurrentWeatherData {
    coord: {
        lon: number,
        lat: number
    },
    weather: IWeather[],
    base: string,
    main: IMain,
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface ICurrentWeatherError {
    cod: string,
    message: string
}

export interface CurrentWeatherState {
    data: ICurrentWeatherData | null,
    loading: boolean;
    error: string;
}
