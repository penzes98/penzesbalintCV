import { Box } from '@mui/material';
import React from 'react';
import '../App.css';
import { SectionStyle } from '../Styles/Styles';

function Schools() {
  return (
    <Box
      component='section'
      sx={{
        ...SectionStyle,
        margin: 'auto'
      }}
    >
      <h1>Ez a Schools subpage</h1>
    </Box>
  )
}

export default Schools
