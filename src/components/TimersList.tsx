import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/layout';
import { AppState } from '../redux/store';
import { TimerView } from './TimerView';
import { loadTimers, setTimers } from '../redux/timers/actions';
import moment from 'moment';

export const TimersList = () => {
    const timers = useSelector((state: AppState) => state.timers.timers);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('use effect');

        const loadedTimers = loadTimers();

        if (!loadedTimers) return;
        loadedTimers.forEach((t) => {
            t.timePoints = t.timePoints.map((p) => moment(p));
        });
        dispatch(setTimers(loadedTimers));
    }, []);

    return (
        <Flex flexDirection="column" m="10px">
            {timers.length ? (
                timers.map((t, ind) => {
                    return <TimerView key={t.id} timer={t} />;
                })
            ) : (
                <h1>No timers yet</h1>
            )}
        </Flex>
    );
};
