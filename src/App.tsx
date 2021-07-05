import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';

const App: React.FC = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <div>
                <h1>Привет из компонента App</h1>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/counter'}>Counter</NavLink>
            </div>
            <Route path={'/'} exact>
                <HomePage/>
            </Route>
            <Route path={'/counter'} exact>
                <CounterPage/>
            </Route>
        </BrowserRouter>
    );
};

export default App;