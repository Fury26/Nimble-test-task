import React, { useEffect, useMemo, useState } from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { IoRemoveOutline, IoPlayOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { Timer } from '../utils/types';
import { deleteTimer, pauseTimer, resumeTimer } from '../redux/timers/actions';

type Props = {
    timer: Timer;
};

export const TimerView: React.FC<Props> = ({ timer }) => {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(null);
    const [timeLast, setTimeLast] = useState(null);
    const [resume, setResume] = useState(false);

    const dispatch = useDispatch();

    const calculateTime = () => {
        let time: number = 0;
        for (let i = 0; i < timer.timePoints.length; i += 2) {
            if (i === timer.timePoints.length - 1) {
                time += moment().diff(timer.timePoints[i]);
            } else {
                time += timer.timePoints[i + 1].diff(timer.timePoints[i]);
            }
        }
        return time / 1000;
    };

    /* calculate time of how long timer is working before user loaded this page */
    const timeBeforeLoading = useMemo(calculateTime, [timer.timePoints.length]);

    useEffect(() => {
        changeTime();
    }, []);

    useEffect(() => {
        const MS = 100;
        setTimeout(() => {
            if (!timer.isRunning) return;
            changeTime();
            setTimeInSeconds(() => timeInSeconds + MS / 1000);
        }, MS);
    }, [timeInSeconds]);

    const pauseResumeHandler = () => {
        const m = moment();

        if (timer.isRunning) {
            dispatch(pauseTimer(m, timer.id));
        } else {
            setTimeInSeconds(0);
            dispatch(resumeTimer(m, timer.id));
        }
    };

    const deleteTimerHandler = () => {
        dispatch(deleteTimer(timer.id));
    };

    const changeTime = () => {
        const displayTime = timeInSeconds + timeBeforeLoading;
        let seconds = 0,
            minutes = 0,
            hours = 0;
        hours = Math.trunc(displayTime / 3600);
        minutes = Math.floor((displayTime - hours * 3600) / 60);
        seconds = displayTime - hours * 3600 - minutes * 60;
        let h = hours > 10 ? hours.toString() : `0${hours}`;
        let m = minutes > 10 ? minutes.toString() : `0${minutes}`;
        let s = seconds > 10 ? Math.trunc(seconds).toString() : `0${Math.trunc(seconds)}`;

        setTimeLast(() => `${h} : ${m} : ${s}`);
    };

    return (
        <Flex
            borderTop="1px solid rgba(0, 0, 0, 0.3)"
            borderBottom="1px solid rgba(0, 0, 0, 0.3)"
            borderRadius="2px"
            alignItems="center"
            justifyContent="space-between"
            py="10px"
            my="10px"
            w="100%"
            fontWeight="bold"
            bg={timer.isRunning ? 'gray.100' : '#fff'}>
            <Text ml="10px" flex="2">
                {timer.name}
            </Text>
            <Flex flex="3" justifyContent="space-between" alignItems="center">
                <Text>{timeLast}</Text>
                <Flex>
                    <IconButton
                        onClick={pauseResumeHandler}
                        aria-label="Pause/Resume"
                        bg="transparent"
                        as={timer.isRunning ? AiOutlinePauseCircle : IoPlayOutline}
                    />
                    <IconButton
                        onClick={deleteTimerHandler}
                        color="red"
                        bg="transparent"
                        aria-label="Remove"
                        as={IoRemoveOutline}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
