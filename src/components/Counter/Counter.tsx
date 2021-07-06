import React from 'react';

import Button from '@material-ui/core/Button';
import {Container, Grid, Typography} from '@material-ui/core';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

const Counter: React.FC = (): React.ReactElement => {
    const {count} = useTypedSelector(state => state.counter);
    const {asyncIncrement, increment, decrement, setTime} = useActions();
    return (
        <Container fixed>
            <Typography align={'center'} component={'p'} variant={'h3'} gutterBottom>{count}</Typography>
            <Grid container spacing={4} justify={'center'}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => {
                        increment();
                        setTime();
                    }}>+</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={() => decrement()}>-</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => asyncIncrement()}>Async
                        increment</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Counter;