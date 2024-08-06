import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';

const Homepage1 = () => {
  const tags = [
    'Mobile Apps',
    'Web Apps',
    'Landing Pages',
    'Prototypes',
    'Full Stack Development (Bubble)',
    'Logos / Branding',
    'Presentation Deck Design',
    'Social Media Graphics',
    'Email Templates',
    'Process Automations',
  ];

  const projects = [
    {
      title: 'Groupon',
      description:
        'Designed the entire iPhone, iPad and Android Groupon apps. Downloaded over 100 million times.',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcJkZbOfFU0oDOrRP003PrIWRBuGWsBRlXg&s',
      tags: ['UX/UI Design', 'Mobile'],
    },
    {
      title: 'Fanatics',
      description:
        'Fanatics is the largest sport eCommerce marketplace. Redesigned the NFL Shop app and Fanatics touch site.',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7mc3cZpNnt-FHaMFe14IP61qS2oI1NXCCA&s',
      tags: ['UX/UI Design', 'Web', 'Mobile'],
    },
    {
      title: 'ShareGrid',
      description:
        'We founded startup ShareGrid & built it into largest photo/film rental marketplace in the world. ',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7mc3cZpNnt-FHaMFe14IP61qS2oI1NXCCA&s',
      tags: ['UX/UI Design', 'Development', 'Branding', 'Marketing Material'],
    },
    {
      title: 'Samsung',
      description:
        'Worked with the SPSN department to create graphics and motion graphic material for their flagship devices.',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcJkZbOfFU0oDOrRP003PrIWRBuGWsBRlXg&s',
      tags: ['Branding', 'Marketing Material'],
    },
  ];

  const titleColors = ['#FF0027', '#7EFF2A', '#3357FF', '#A300A3'];
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container>
        <Box py={5} width={'72%'}>
          <Typography variant='h4'>
            Designs that increase signups, conversion and retention
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            Our team has over a decade of experience building consumer and
            enterprise solutions for two-sided marketplaces and Software as a
            Service companies.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  height: 320,
                  backgroundImage: `url(${project.imgSrc})`,
                  backgroundSize: 'cover',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 320,
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                      variant='h5'
                      sx={{
                        mb: 2,
                        color: titleColors[index % titleColors.length],
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      sx={{ mb: 2, maxWidth: '240px' }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }} maxWidth={400}>
                    {project.tags.map((tag, i) => (
                      <Button
                        size='small'
                        key={i}
                        sx={{ mb: 1, mr: 1, bgcolor: '#f5f5f5' }}
                      >
                        {tag}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ py: 5, width: 1 }} textAlign='center'>
          <Typography
            variant='h3'
            sx={{ maxWidth: '700px', mx: 'auto' }}
            gutterBottom
          >
            Design, Development, Automation & More
          </Typography>
          <Box>
            {tags.map((tag, index) => (
              <Box
                key={index}
                sx={{
                  display: 'inline-block',
                  px: 2,
                  py: 1,
                  border: '1px solid black',
                  borderRadius: 4,
                  m: 1,
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage1;
