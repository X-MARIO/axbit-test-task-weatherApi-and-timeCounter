import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { useActions } from '../../hooks/useActions';

interface SearchProps {
    title: string,
}

const Search: React.FC<SearchProps> = ({title}): React.ReactElement => {
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
        <div>
            <div>
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <form onSubmit={submitHandler}>
                        <Input
                            type="text"
                            className={''}
                            placeholder={'Enter city name'}
                            style={{maxWidth: 300}}
                            value={city}
                            onChange={changeHandler}
                        />
                        <Button style={{maxWidth: 300, margin: '0 auto'}}>Search</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;