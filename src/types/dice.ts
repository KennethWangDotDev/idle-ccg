interface Dice {
    tier: number;
    rarity: number;
    passive: () => number;
    values: DiceValue[];
}

interface DiceValue {
    value: () => number;
    effect?: () => number;
}

export default Dice;
