import { Box } from '@mui/material';
import React from 'react';
import '../App.css';
import { SectionStyle } from '../Styles/Styles';

function AboutMe() {
  return (
    <Box
      component='section'
      sx={{
        ...SectionStyle,
        margin: 'auto'
      }}
    >
      <h1>Ez az Aboutme section</h1>
    </Box>
  )
}

export default AboutMe
