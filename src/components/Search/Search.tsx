import React, {useState} from 'react';
import {Button, Input, Typography} from '@material-ui/core';
import {useActions} from '../../hooks/useActions';

import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input: {
        marginRight: theme.spacing(2)
    }
}));

interface SearchProps {
    title: string,
}

const Search: React.FC<SearchProps> = ({title}): React.ReactElement => {
    const classes = useStyles();
    const [city, setCity] = useState<string>('');
    const {setAlert, getWeather, setLoading} = useActions();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === '') {
            setAlert('City is required!');
        }

        setLoading();
        getWeather(city);
        setCity('');
    };

    return (
        <Container fixed>
            <Typography component={'h1'} variant={'h4'} gutterBottom>{title}</Typography>
            <form onSubmit={submitHandler}>
                <Input
                    type="search"
                    placeholder={'Enter city name'}
                    value={city}
                    className={classes.input}
                    onChange={changeHandler}
                />
                <Button type={'submit'} variant="contained" color={'secondary'}>Search</Button>
            </form>
        </Container>
    );
};

export default Search;