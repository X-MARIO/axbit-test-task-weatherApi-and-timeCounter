import React from 'react';
import { setTime } from '../../store/action-creators/time';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Dispatch } from 'redux';
import { TimeState } from '../../types/time';
import { Container, Typography } from '@material-ui/core';

interface TimeProps extends TimeState {
}

class Time extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() { // create the interval once component is mounted
        // @ts-ignore
        this.timerID = setInterval(() => {
            this.props.setTimeDispatch();
        }, 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        // @ts-ignore
        clearInterval(this.timerID);
    }

    render() {
        const {time} = this.props; // retrieve the time from state
        return (
            <Container fixed>
                <Typography component={'h2'} variant={'h2'} align={'center'}>Текущее время: {time}</Typography>
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState): TimeState => {
    console.log(state)
    return {
        time: state.time.time
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setTimeDispatch: () => dispatch(setTime())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);