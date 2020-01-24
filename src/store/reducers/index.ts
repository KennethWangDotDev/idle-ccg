import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import counterReducer from './dice';

const rootReducer = (history: History): Reducer =>
    combineReducers({
        dice: counterReducer,
        router: connectRouter(history),
    });

export interface State {
    dice: number;
    router: RouterState;
}

export default rootReducer;
