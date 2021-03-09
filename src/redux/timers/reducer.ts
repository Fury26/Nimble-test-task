import { ActionType, Timer } from "../../utils/types"
import { ADD_TIMER, PAUSE_TIMER, RESUME_TIMER } from "./types"

export type TimersState = {
    timers: Timer[];
}

const initialState: TimersState = {
    timers: [],
}

export const timersReducer = (state: TimersState = initialState, action: ActionType): TimersState => {
    switch (action.type) {
        case ADD_TIMER: return {
            timers: [...state.timers, action.payload]
        };

        //todo pause and resume timers
        case RESUME_TIMER: return {
            timers: [...state.timers, action.payload]
        };
        case PAUSE_TIMER: return {
            timers: [...state.timers, action.payload]
        };
        
        default: return state;
    }
}