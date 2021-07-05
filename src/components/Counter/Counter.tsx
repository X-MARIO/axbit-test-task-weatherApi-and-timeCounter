import React from 'react';

import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import './Counter.scss';

const Counter: React.FC = (): React.ReactElement => {
    const {count} = useTypedSelector(state => state.counter);
    const {asyncIncrement, increment, decrement} = useActions();
    return (
        <Container maxWidth="sm">
            <div className={'count-title'}>{count}</div>
            <Button variant="contained" color="primary" onClick={() => increment()}>+</Button>
            <Button variant="contained" color="primary" onClick={() => decrement()}>-</Button>
            <Button variant="contained" color="primary" onClick={() => asyncIncrement()}>Async increment</Button>
        </Container>
    );
};

export default Counter;