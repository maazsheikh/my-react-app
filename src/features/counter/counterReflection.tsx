import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../features/counter/counterSlice';
import type { RootState } from '../../app/store';
import { selectCounterValue } from './counterSelector';

function CounterReflection() {
    const count = useSelector(selectCounterValue); // Get state

    return (
        <div>
            <h2>Count from other component: {count}</h2>
        </div>
    );
}
export default CounterReflection;