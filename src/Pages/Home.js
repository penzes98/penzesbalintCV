import { Box } from '@mui/material';
import React from 'react';
import '../App.css';
import { SectionStyle } from '../Styles/Styles';

function Home() {
    return (
        <Box
            component='section'
            sx={{
                ...SectionStyle,
                margin: 'auto'
            }}
        >
            <h1>Ez a homepage</h1>
        </Box>
    );

}

export default Home
