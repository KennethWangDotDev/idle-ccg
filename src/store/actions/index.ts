import { ActionType } from 'typesafe-actions';
import { add, decrement, increment } from './dice';

export const actions = {
    add,
    decrement,
    increment,
};

export type RootAction = ActionType<typeof actions>;
