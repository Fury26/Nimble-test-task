import React from 'react';
import { Container } from '@chakra-ui/react';
import {Provider} from 'react-redux';
import { Box } from '@chakra-ui/react';
import { InputTimer } from './InputTimer';
import { TimersList } from './TimersList';
import { store } from '../redux/store';

export const App: React.FC = () => {
    return (
        <Provider store={store}> 
            <Container centerContent>
                <Box
                    width={{
                        sm: '100vw',
                        md: '560px'
                    }}
                    padding={{
                        sm: 0
                    }}
                    margin={{
                        sm: 0
                    }}>
                    Welcome to TRACKER
                    <InputTimer />
                    <TimersList />
                </Box>
            </Container>
        </Provider>
    );
};
