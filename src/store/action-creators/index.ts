import * as CounterActionCreators from './counter';
import * as WeatherActionCreators from './weather';
import * as AlertActionCreators from './alert';

export default {
    ...CounterActionCreators,
    ...WeatherActionCreators,
    ...AlertActionCreators
};