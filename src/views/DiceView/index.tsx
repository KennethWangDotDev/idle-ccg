import React from 'react';
import Dice from 'types/dice';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'store/reducers/index';
import { increment, decrement, add } from 'store/actions/dice';

const testDice: Dice = {
    passive: () => 5,
    tier: 1,
    rarity: 1,
    values: [],
};

const App: React.FC = () => {
    const dice = useSelector((state: State) => state.dice);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{JSON.stringify(testDice)}</p>
            <p>{dice}</p>
            <button type="button" onClick={() => dispatch(increment())}>
                Increment!
            </button>
            <button type="button" onClick={() => dispatch(decrement())}>
                Decrement!
            </button>
            <button type="button" onClick={() => dispatch(add(5))}>
                Add 5!
            </button>
        </div>
    );
};

export default App;
