import { createReducer, getType } from 'typesafe-actions';
import { increment, decrement, add } from 'store/actions/dice';

const counterReducer = createReducer(5)
    .handleType([getType(increment)], (state) => state + 1)
    .handleType([getType(decrement)], (state) => state - 1)
    .handleType([getType(add)], (state, action) => state + action.payload);

export default counterReducer;
