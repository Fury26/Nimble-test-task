import { Moment } from 'moment';
import { ActionType, Timer } from '../../utils/types';
import { ADD_TIMER, DELETE_TIMER, PAUSE_TIMER, RESUME_TIMER, SET_TIMERS, storageName } from './types';

export const addTimer = (timer: Timer): ActionType => ({
    type: ADD_TIMER,
    payload: timer
});

export const setTimers = (arr: Timer[]): ActionType => ({
    type: SET_TIMERS,
    payload: arr
});

export const deleteTimer = (id: number): ActionType => ({
    type: DELETE_TIMER,
    payload: id
});

export const pauseTimer = (pauseTime: Moment, index: number): ActionType => ({
    type: PAUSE_TIMER,
    payload: {
        pauseTime,
        index
    }
});

export const resumeTimer = (resumeTime: Moment, index: number): ActionType => ({
    type: RESUME_TIMER,
    payload: {
        resumeTime,
        index
    }
});

export const setTimersToStrage = (timers: Timer[]) => {
    localStorage.setItem(storageName, JSON.stringify(timers));
};

export const loadTimers = (): Timer[] | null => {
    const arr = JSON.parse(localStorage.getItem(storageName));

    if (!arr || arr.length === 0) return null;

    return arr;
};
