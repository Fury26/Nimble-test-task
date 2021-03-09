export type Timer = {

    /*  timePoints uses to identify when pause/resume button was pressed.
        the first point shows when stopwatch was created.*/
    timePoints: moment.Moment[];
    isRunning: boolean;
    name: string;
}

export type ActionType = {
    type: string;
    payload: any;
}