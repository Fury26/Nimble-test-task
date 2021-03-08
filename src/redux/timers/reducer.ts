import { ActionType, Timer } from "../../utils/types"

export type TimersState = {
    timers: Timer[];
}

const initialState: TimersState = {
    timers: [],
}

export const timersReducer = (state: TimersState = initialState, action: ActionType): TimersState => {
    switch (action.type) {


        default: return state;
    }
}