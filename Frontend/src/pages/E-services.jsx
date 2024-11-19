import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

const services = [
  {
    id: 1,
    title: 'E-ROLL',
    description: `Excise Roles, e-roll (ver 2.0) web-based software is a web-based product for the synchronization of all employees in the excise department.Rtwined.`,
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2020/07/eroll.png',
    link: 'https://eroll.keralaexcise.gov.in/',
    color: '#9b2226'
  },
  {
    id: 2,
    title: 'E-ARMS',
    description: 'E-ARMS (Automated Retailer Management System) is an online platform developed by the Kerala Excise Department',
    img: 'https://imgs.search.brave.com/u7yGa-cPXOL-JTWbyBK5UOw8-0a8FkJfE2arjLsa6tw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXVpY2tzdGFydGFk/bWluLmNvbS9pbWFn/ZXMvZmlsZS1yZXBv/c2l0b3J5LWltZy5w/bmc',
    link: 'https://etreasury.kerala.gov.in/',
    color:'#fb5607'
  },
  {
    id: 3,
    title: 'E-OFFICE',
    description: 'E-Office aims to improve productivity, quality, resource management, turnaround time and transparency',
    img: 'https://keralaexcise.gov.in/wp-content/uploads/2018/09/eoffice.png',
    link: '/e-or',
    color: '#ff006e'
  },
  {
    id: 4,
    title: 'E-TREASURY',
    description: 'E-Treasury is Owned by Department of Treasuries, Government of Kerala. This system is developed as part of IFMS (Integrated Financial Management System)',
    img: 'https://imgs.search.brave.com/F4rB3Pd2tmzLTsI6mKI_j_0XRhreKvytKyOtgkTSUzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXNj/YWwudHJlYXN1cnku/Z292L2ltYWdlcy9p/bGx1c3RyYXRpdmUt/aWNvbnMvZ292ZXJu/bWVudC5zdmc',
    link: 'https://etreasury.kerala.gov.in/',
    color:'#8338ec'
  },
  {
    id: 5,
    title: 'E-VACANCY',
    description: 'G-to-G Web Portal for reporting the vacancies to Kerala Public Service Commission.',
    img: 'https://imgs.search.brave.com/Bt462TSWFFTy6b3HW-0FzOE33U3TRDz4JoNObbWpgEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NjAyMTIzL3Bob3Rv/L3ZhY2FuY3ktbmVv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Vlk5bzU4Q2Z2/elRCZ3JmVER5OXZ0/WFlpRlNxaU9KU21F/ODlOYVU5aklaTT0',
    link: 'https://mailer.psc.kerala.gov.in/evacancy/index.php',
    color:'#3a86ff'
  },
  {
    id: 6,
    title: 'E-TENDER',
    description: 'The eSubmission Tender System of Kerala enables the Tenderers to download the Tender Schedule free of cost and then submit the bids online through this portal.',
    img: 'https://imgs.search.brave.com/hl0Y83ioAuURx0WIA9Rl-PiFYZtaNS0I7lWkvTvmT7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODE3Nzc0MS9waG90/by90ZW5kZXItd29y/ZC1pbi13b29kZW4t/Y3ViZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eVItNk1T/WW9TdXNXSHFmUTZD/RDJFYjZreHN4WjdI/dF9mZ1d6VHU5Vi1J/QT0',
    link: 'https://etenders.kerala.gov.in/nicgep/app',
    color:'#003566'
  },
  {
    id: 7,
    title: 'FLEET',
    description: 'Fleet Management System by Kerala Excise Department, Category: State–Department, Sub-Category: Governance',
    img: 'https://imgs.search.brave.com/uhzNm9O8G3N0JPOf6-oso4AnZUnof3xq1NTWvr4Fa60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/c2lkZS12aWV3LWNh/cnNfMjMtMjE0NzY4/NjQ0OS5qcGc_c2Vt/dD1haXNfaHlicmlk',
    link: 'https://fleet.keralaexcise.gov.in/',
    color:'#ef233c'
  },
  {
    id: 8,
    title: 'NCORD',
    description: 'The NCORD is a centralized platform aimed at enhancing coordination among various stakeholders in India’s drug law enforcement',
    img: 'https://imgs.search.brave.com/VceVzVoTl5iool2DWO5Cx4Sg3TvKx8DpCRHCa2ewXE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBiL0N1c3RvbXNf/Jl9DZW50cmFsX0V4/Y2lzZV9PZmZpY2Vy/c19hdF9OQUNFTi5K/UEc',
    link: 'https://narcoordindia.gov.in/',
    color: '#0a9396'
  }
];

const OnlineServices = () => {  
  return (
    
    <div style={{ backgroundColor: '#fafbff', padding: '40px 0', marginLeft:'-5%', width: '110%' }}>
      <Typography className='Title-card-section'> <h5>
        Useful E-Services</h5>
      </Typography>
      <Typography className='Title-card-section-b'>
       <h2>Online Services</h2> 
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: '0 10%', marginTop:'2%' }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            
            <Card sx={{     height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between' }} 
                            
                            className='initiative-card'>
              
              <CardContent
                sx={{
                  flex: '1 1 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }} color={service.color}>
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

export default OnlineServices;
