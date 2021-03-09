import { Flex, Text } from '@chakra-ui/layout';
import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { IoRemoveOutline } from 'react-icons/io5';

import React, { useEffect, useMemo, useState } from 'react';
import { Timer } from '../utils/types';
import moment from 'moment';

type Props = {
    timer: Timer;
};

export const TimerView: React.FC<Props> = ({ timer }) => {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timeLast, setTimeLast] = useState(null);

    const calculateTime = () => {
        let time: number = 0;
        for (let i = 0; i < timer.timePoints.length; i += 2) {
            if (i === timer.timePoints.length - 1) {
                time += Math.floor(moment().diff(timer.timePoints[i]));
            } else {
                time += Math.floor(timer.timePoints[i + 1].diff(timer.timePoints[i]));
            }
        }
        return Math.floor(time / 1000);
    };

    /* calculate time of how long timer is working before user loaded this page */
    const timeBeforeLoading = useMemo(calculateTime, [timer.timePoints.length]);

    useEffect(() => {
        console.log(timeBeforeLoading);
        
    }, []);

    useEffect(() => {
        setTimeout(() => {
            changeTime();
            setTimeInSeconds(() => timeBeforeLoading + timeInSeconds + 1);
        }, 1000);
    }, [timeInSeconds]);

    const pauseResumeHandler = () => {};

    const deleteTimerHandler = () => {};

    const changeTime = () => {
        
        let seconds = 0, minutes = 0, hours = 0;
        hours = Math.trunc(timeInSeconds / 3600);
        minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
        seconds = timeInSeconds - hours * 3600 - minutes * 60;

        setTimeLast(() => `${hours} : ${minutes} : ${seconds}`);
    };

    return (
        <Flex justifyContent="space-between" pb="10px">
            <Text flex="1">{timer.name}</Text>
            <Flex flex="1" justifyContent="space-between">
                <Text>{timeLast}</Text>
                <Flex>
                    <IconButton
                        onClick={pauseResumeHandler}
                        aria-label="Pause/Resume"
                        bg="transparent"
                        as={AiOutlinePauseCircle}
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
