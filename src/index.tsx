import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ChakraProvider } from '@chakra-ui/react';

const ROOT = document.querySelector('#root');

ReactDOM.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>,
    ROOT
);
