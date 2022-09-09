import React from 'react';
import { Box } from '@mui/material';
import SchoolCard from '../Components/SchoolCard';
import { SchoolCardDatas } from '../Constants/SchoolCardsData';
import { SectionStyle } from '../Styles/Styles';

function Schools() {
  return (
    <Box
      component='section'
      sx={{
        ...SectionStyle,
        margin: 'auto',
        fontSize: 20
      }}
    >
      <h1>Schools</h1>
      <Box
        className='cards'
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,

        }}>

        {
          SchoolCardDatas.map(schoolCard => {

            return (
              <SchoolCard
                imgAlt={schoolCard.imgAlt}
                imgHeight='140'
                imgSrc={schoolCard.imgSrc}
                cardH4={schoolCard.title}
                cardListElements={schoolCard.liEls}
              />
            )
          })
        }

      </Box>
    </Box>

  )
}

export default Schools
