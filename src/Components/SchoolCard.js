import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const SchoolCard = ({ imgAlt, imgHeight, imgSrc, cardH4, cardListElements }) => {
    return (
        <Card className="card">
            <CardMedia
                component="img"
                alt={imgAlt}
                height={imgHeight}
                image={imgSrc}
            />
            <CardContent>
                <Typography >
                    {cardH4}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <ul>
                        {cardListElements.map((li) => {

                            return <li>{li}</li>
                        })}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SchoolCard