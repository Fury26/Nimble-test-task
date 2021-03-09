import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';
import { Flex } from '@chakra-ui/layout'
import moment from 'moment';
import { AppState } from '../redux/store';
import { TimerView } from './TimerView';

export const TimersList = () => {

    const timers = useSelector((state: AppState) => state.timers.timers);

    useEffect(() => {
        // const timer: moment.Moment = moment();
        
        // console.log(timer);
        
        // localStorage.setItem('timers', JSON.stringify([timer]));

        // const copy = moment(JSON.parse(localStorage.getItem('timers'))[0]);
        // console.log(copy);
    }, [])

    return (
        <Flex flexDirection="column">
            {
                timers.length ? timers.map((t, ind) => {

                    return <TimerView key={ind} timer={t}/>
                }) : <h1>No timers yet</h1>
            }
        </Flex>
    );
}
