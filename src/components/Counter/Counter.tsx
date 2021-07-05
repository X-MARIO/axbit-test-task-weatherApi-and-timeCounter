import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import './Counter.scss';

const Counter: React.FC = (): React.ReactElement => {
    const {count} = useTypedSelector(state => state.counter);
    const {asyncIncrement, increment, decrement} = useActions();
    return (
        <div>
            <span className={'count-title'}>{count}</span>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => asyncIncrement()}>Async increment</button>
        </div>
    );
};

export default Counter;