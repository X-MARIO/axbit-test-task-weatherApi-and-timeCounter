import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {Container, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    greetingPost: {
        color: theme.palette.common.white, // Установили цвет для всего блока
        backgroundSize: 'cover', //Масштабирует изображение с сохранением пропорций так, чтобы его ширина или высота равнялась ширине или высоте блока.
        backgroundRepeat: 'no-repeat', // Устанавливает одно фоновое изображение в элементе без его повторений
        backgroundPosition: 'center', //Задает начальное положение фонового изображения
        padding: theme.spacing(5) //8px * 5
    },
}))

const HomePage: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    // variant={'h1'} - выглядит на странице как h1
    // component={'h2'} - но в DOM дереве это h5
    return (
        <Paper
            className={classes.greetingPost}
            style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
        >
            <Container fixed>
                <Typography
                    variant={'h5'}
                    component={'h1'}
                    color={'secondary'}
                    align={'center'}>Приложение прогноза погоды</Typography>
            </Container>
        </Paper>
    );
};

export default HomePage;