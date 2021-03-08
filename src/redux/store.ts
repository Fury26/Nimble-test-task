import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { timersReducer, TimersState } from './timers/reducer';

export type AppState = {
    timers: TimersState;
};

const reducer = combineReducers({
    timers: timersReducer,
});

const initialState = {};

export const store = createStore(reducer, initialState, composeWithDevTools());


