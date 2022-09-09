import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const SchoolCard = ({ imgAlt, imgHeight, imgSrc, cardH4, cardListElements }) => {
    return (
        <Card className="card" sx={{ width: { xs: '100%', md: 'auto' } }}>
            <CardMedia
                component="img"
                alt={imgAlt}
                height={imgHeight}
                image={imgSrc}
            />
            <CardContent sx={{ p: 3 }}>
                <Typography variant='h6' sx={{ mb: 2 }}>
                    {cardH4}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Box component='ul' sx={{ ml: 3 }}>
                        {cardListElements.map((li) => {

                            return <li>{li}</li>
                        })}
                    </Box>
                </Typography>
            </CardContent>
        </Card >
    )
}

export default SchoolCard