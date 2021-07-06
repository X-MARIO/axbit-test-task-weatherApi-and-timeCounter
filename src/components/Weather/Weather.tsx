import React from 'react';
import {ICurrentWeatherData} from '../../types/weather';
import {Card, CardContent, CardMedia, Container, Grid, Typography} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2)
    },
    weatherTitle: {},
    level: {},
    levelItem: {},
    levelCard: {},
    levelCardHeader: {
        textAlign: 'center',
        marginBottom: theme.spacing(1),
        textTransform: 'capitalize',
    },
    levelCardImage: {},
    levelCardContent: {},
}));

interface WeatherProps {
    data: ICurrentWeatherData
}

const Weather: React.FC<WeatherProps> = ({data}): React.ReactElement => {
    const classes = useStyles();
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return (
        <>
            <Container fixed className={classes.container}>
                <Typography
                    component={'h1'}
                    variant={'h4'}
                    className={classes.weatherTitle}
                    align={'center'}
                    gutterBottom
                >{data.name} - {data.sys.country}</Typography>
                <Grid container className={classes.level} spacing={3} justify={'center'}>
                    <Grid item className={classes.levelItem}>
                        <Card className={classes.levelCard}>
                            <CardContent>
                                <Typography
                                    component={'p'}
                                    className={classes.levelCardHeader}
                                >{data.weather[0].description}</Typography>
                            </CardContent>
                            <CardMedia
                                component={'img'}
                                className={classes.levelCardImage}
                                alt={'Weather icon'}
                                image={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                            />
                        </Card>
                    </Grid>
                    <Grid item className={classes.levelItem}>
                        <Card className={classes.levelCard}>
                            <CardContent>
                                <Typography
                                    component={'p'}
                                    className={classes.levelCardHeader}
                                >temp</Typography>
                                <Container className={classes.levelCardContent}>
                                    <Typography>{data.main.temp}K</Typography>
                                    <Typography>{fahrenheit}<sup>&#8457;</sup></Typography>
                                    <Typography>{celsius}<sup>&#8451;</sup></Typography>
                                </Container>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item className={classes.levelItem}>
                        <Card className={classes.levelCard}>
                            <CardContent>
                                <Typography
                                    component={'p'}
                                    className={classes.levelCardHeader}
                                >humidity</Typography>
                                <Container className={classes.levelCardContent}>
                                    <Typography>{data.main.humidity}</Typography>
                                </Container>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item className={classes.levelItem}>
                        <Card className={classes.levelCard}>
                            <CardContent>
                                <Typography
                                    component={'p'}
                                    className={classes.levelCardHeader}
                                >pressure</Typography>
                                <Container className={classes.levelCardContent}>
                                    <Typography>{data.main.pressure}</Typography>
                                </Container>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item className={classes.levelItem}>
                        <Card className={classes.levelCard}>
                            <CardContent>
                                <Typography
                                    component={'p'}
                                    className={classes.levelCardHeader}
                                >wind</Typography>
                                <Container className={classes.levelCardContent}>
                                    <Typography>{data.wind.speed} m/s</Typography>
                                </Container>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Weather;