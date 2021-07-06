import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@material-ui/core';
import WeatherPage from './pages/WeatherPage';
import Time from './components/Time/Time';

const App: React.FC = (): React.ReactElement => {
        return (
            <BrowserRouter>
                <Container style={{'paddingTop': 100}}>
                    <Navbar/>
                    <Route path={'/'} exact>
                        <HomePage/>
                    </Route>
                    <Route path={'/counter'} exact>
                        <CounterPage/>
                        <Time/>
                    </Route>
                    <Route path={'/weather'} exact>
                        <WeatherPage/>
                    </Route>
                </Container>
            </BrowserRouter>
        );
    }
;

export default App;