import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { AppTheme } from './components/theme';

const ROOT = document.querySelector('#root');

ReactDOM.render(
    <ChakraProvider theme={AppTheme}>
        <App />
    </ChakraProvider>,
    ROOT
);
