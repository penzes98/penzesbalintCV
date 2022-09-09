import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box
            component='footer'
            sx={{
                width: '100%',
                borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                padding: 3,
                textAlign: { xs: 'center', sm: 'right' },
                mt: 4,
                bottom: 0

            }}
        >
            <Typography paragraph={true} sx={{ m: 0 }}>Pénzes Bálint &copy; 2022</Typography>

        </Box>
    )
}

export default Footer