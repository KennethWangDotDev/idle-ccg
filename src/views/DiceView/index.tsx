import React from 'react';
import Dice from 'types/dice';

const testDice: Dice = {
    passive: () => 5,
    tier: 1,
    rarity: 1,
    values: [],
};

const App: React.FC = () => {
    return (
        <div>
            <p>{JSON.stringify(testDice)}</p>
        </div>
    );
};

export default App;
