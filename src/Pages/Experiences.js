import { Box } from '@mui/material';
import React from 'react';
import '../App.css';
import { SectionStyle } from '../Styles/Styles';

function Experiences() {
  return (
    <Box
      component='section'
      sx={{
        ...SectionStyle,
        margin: 'auto'
      }}
    >
      <h1>Ez az Experiences section</h1>
    </Box>
  )
}

export default Experiences
