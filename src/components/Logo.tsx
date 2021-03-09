import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const Logo = () => {
    return (
        <Box w="100%">
            <Text textTransform="lowercase" textAlign="center" p="10px" fontWeight="bold" fontSize="2rem">
                Tracker
            </Text>
        </Box>
    );
};
