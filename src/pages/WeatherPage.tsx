import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Search from '../components/Search/Search';
import Weather from '../components/Weather/Weather';
import Alert from '../components/Alert/Alert';

import { Container, Typography } from '@material-ui/core';


const WeatherPage: React.FC = (): React.ReactElement => {
    const {data, loading, error} = useTypedSelector(state => state.weather);
    const {message} = useTypedSelector(state => state.alert);
    const {setError, setAlert} = useActions();

    return (
        <Container fixed>
            <Search title={'Enter city name and press search button'}/>
            {
                loading && <Typography component={'h1'} variant={'h3'}>Идет загрузка...</Typography>
            }

            {
                data && <Weather data={data}/>
            }

            {
                message && <Alert message={message} onClose={() => setAlert('')}/>
            }

            {
                error && <Alert message={error} onClose={() => setError()}/>
            }
        </Container>
    );
};

export default WeatherPage;