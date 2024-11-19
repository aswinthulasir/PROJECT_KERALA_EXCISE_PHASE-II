import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

const services = [
  {
    id: 1,
    title: 'Chief Minister Excise Medal',
    description: `'Apuni Sarkar' carries a vision to transform the State into a Digitally empowered society and deliver Citizen Centric services.`,
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2024/01/5X7A8968.jpg',
    link: '/apply-excise'
  },
  {
    id: 2,
    title: 'Recent activities 2023',
    description: 'UTC is a public sector passenger road transport corporation providing services in the state of Uttarakhand.',
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2023/11/searc_1-150x150.jpg',
    link: '/e-toddy'
  },
  {
    id: 3,
    title: 'Passing Out Parade',
    description: 'The Corbett Tiger Reserve is not just a tourist destination but a testament to successful wildlife conservation.',
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2021/03/045A2934-150x150.jpg',
    link: '/e-or'
  },
  {
    id: 4,
    title: 'Republic Day Celebrations',
    description: 'There are four holy shrines in Uttarakhand dedicated to Hindu Gods and holy rivers of India. The four shrines are situated.',
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2021/01/rd_21_1-150x150.jpg',
    link: '/e-roll'
  }
];

const Gallery = () => {  
  return (
    
    <div style={{  padding: '40px 0', marginLeft:'-5%', width: '110%' }}>
      <Typography className='Title-card-section'> <h5>
        Photo and Video</h5>
      </Typography>
      <Typography className='Title-card-section-b'>
       <h2>Gallery</h2> 
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: '0 10%', marginTop:'2%' }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Card sx={{     height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="180"
                image={service.img}
                alt={service.title}
              />
              <CardContent
                sx={{
                  flex: '1 1 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#1a1a2e', fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4b4b4b', marginBottom: '15px', minHeight: '60px' }}>
                  {service.description}
                </Typography>
                <Button
                  href={service.link}
                  sx={{
                    color: '#007bff',
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    marginBottom: '0%'
                  }}
                >
                  More →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
   
  );
};

export default Gallery;
