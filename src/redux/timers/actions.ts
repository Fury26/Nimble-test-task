import { Moment } from 'moment';
import { Timer } from '../../utils/types';
import { ADD_TIMER, PAUSE_TIMER, RESUME_TIMER } from './types';

export const addTimer = (timer: Timer) => ({
    type: ADD_TIMER,
    payload: timer
});

export const PauseTimer = (pauseTime: Moment) => ({
    type: PAUSE_TIMER,
    payload: pauseTime
});

export const ResumeTimer = (pauseTime: Moment) => ({
    type: RESUME_TIMER,
    payload: pauseTime
});