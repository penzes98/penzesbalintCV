import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../App.css';
import Bgszc from '../pictures/bgszc.png';
import Bme from '../pictures/bme.png';
import Nsjg from '../pictures/nsjg.png'
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
      <div className='cards'>
      <Card className="card">
        <CardMedia
          component="img"
          alt="BME"
          height="140"
          image={Bme}
        />
        <CardContent>
          <Typography >
            Budapest University of Technology <br/>(2019 - prresent)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>Faculty of Electrical Engineering and Informatics</li>
              <li>Computer Science Operational Engineering</li>
            </ul>
        </Typography>
        </CardContent>
      </Card>
      <Card className="card">
        <CardMedia
          component="img"
          height="140"
          image= {Bgszc}
        />
        <CardContent>
          <Typography>
            BGSZC Downtown Economic School <br/> (2017-2019)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>OKJ training </li>
              <li>Economic informatics</li>
            </ul>
        </Typography>
        </CardContent>
      </Card>
      <Card className="card">
        <CardMedia
          component="img"
          alt="NSJG"
          height="140"
          image={Nsjg}
        />
        <CardContent>
          <Typography>
          Nagy Sándor József Secondary School, Budakeszi <br/> (2013-2017)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>Raised IT department</li>
            </ul>
        </Typography>
        </CardContent>
      </Card>
      </div>
    </Box>

  )
}

export default Schools
