import { createAction } from 'typesafe-actions';

export const increment = createAction('INCREMENT')<void>();
export const decrement = createAction('DECREMENT')<void>();
export const add = createAction('ADD')<number>();
