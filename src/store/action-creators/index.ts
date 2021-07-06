import * as CounterActionCreators from './counter';
import * as WeatherActionCreators from './weather';
import * as AlertActionCreators from './alert';
import * as TimeActionCreators from './time';

export default {
    ...CounterActionCreators,
    ...WeatherActionCreators,
    ...AlertActionCreators,
    ...TimeActionCreators
};