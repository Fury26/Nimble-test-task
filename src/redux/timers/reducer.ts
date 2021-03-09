import { ActionType, Timer } from '../../utils/types';
import { setTimersToStrage } from './actions';
import { ADD_TIMER, PAUSE_TIMER, RESUME_TIMER, SET_TIMERS } from './types';

export type TimersState = {
    timers: Timer[];
};

const initialState: TimersState = {
    timers: []
};

export const timersReducer = (state: TimersState = initialState, action: ActionType): TimersState => {
    switch (action.type) {
        case ADD_TIMER: {
            const id = state.timers.length ? state.timers[0].id + 1 : 0;
            const newTimer = {
                ...action.payload,
                id
            };
            const arr = [newTimer, ...state.timers];

            setTimersToStrage(arr);
            return {
                timers: arr
            };
        }
        case SET_TIMERS:
            return {
                timers: action.payload
            };
        case RESUME_TIMER: {
            const arr = state.timers.map((t) => {
                if (t.id === action.payload.index) {
                    t.isRunning = true;
                    t.timePoints.push(action.payload.resumeTime);
                }
                return t;
            });
            setTimersToStrage(arr);
            return {
                timers: arr
            };
        }

        case PAUSE_TIMER: {
            const arr = state.timers.map((t) => {
                if (t.id === action.payload.index) {
                    t.isRunning = false;
                    t.timePoints.push(action.payload.pauseTime);
                }
                return t;
            });
            setTimersToStrage(arr);
            return {
                timers: arr
            };
        }

        default:
            return state;
    }
};
