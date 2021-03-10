import React, { useState } from 'react';
import { Input, Flex, Icon } from '@chakra-ui/react';
import { BsPlayFill } from 'react-icons/bs';
import { IconButton } from '@chakra-ui/react';
import { Timer } from '../utils/types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addTimer } from '../redux/timers/actions';

export const InputTimer = () => {
    const [timerName, setTimerName] = useState<string>('');
    const dispatch = useDispatch();

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimerName(() => event.target.value);
    };

    const addTimerHandler = () => {
        const t: Timer = {
            isRunning: true,
            timePoints: [moment()],
            name: timerName
        };
        if (!timerName.length) {
            t.name = moment().format('YYYY-DD-MM');
        }

        dispatch(addTimer(t));
        setTimerName('');
    };

    return (
        <Flex height="40px" position="relative">
            <Input
                placeholder="Enter tracker name"
                h="100%"
                value={timerName}
                onChange={inputHandler}
                borderRadius="20px"
            />
            <IconButton
                zIndex="10"
                position="absolute"
                borderRadius="50%"
                h="90%"
                onClick={addTimerHandler}
                aria-label="Add Timer"
                icon={<BsPlayFill />}
                right="2px"
                top="2px"
                bg="green.300"
            />
        </Flex>
    );
};
