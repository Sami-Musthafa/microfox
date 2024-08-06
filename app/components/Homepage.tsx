import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import {
  FaForward,
  FaMoneyBill,
  FaPaintBrush,
  FaPlusCircle,
  FaSync,
  FaTimesCircle,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Homepage = () => {
  const tests = [
    {
      title: 'Fast Delivery',
      description: 'Receive your design within two business days on average',
      icon: <FaForward />,
    },
    {
      title: 'Fixed monthly cost',
      description: 'No surprises, pay the same fixed price each month.',
      icon: <FaMoneyBill />,
    },
    {
      title: 'Custom made designs',
      description:
        'Each of your designs is made especially for you and is 100% yours.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Unlimited Designs',
      description:
        'Add as many design requests as you want. Delivered one by one.',
      icon: <FaPlusCircle />,
    },
    {
      title: 'Unlimited Changes',
      description:
        "We'll continue to revise the design until you're 100% satisfied.",
      icon: <FaSync />,
    },
    {
      title: 'Cancel or pause anytime',
      description:
        'Scale up or down as needed, and pause or cancel at anytime.',
      icon: <FaTimesCircle />,
    },
  ];
  return (
    <Box sx={{ bgcolor: '#ffffff', py: 8 }}>
      <Container>
        <Box textAlign='center' mb={5}>
          <Typography variant='h3' component='h2' gutterBottom>
            Great design, without the overhead.
          </Typography>
          <Typography variant='h6' sx={{ maxWidth: '840px', mx: 'auto' }}>
            Our team has over a decade of experience building consumer and
            enterprise solutions for two-sided marketplaces and Software as a
            Service companies.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {tests.map((test, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '160px',
                  bgcolor: '#f5f5f5',
                }}
              >
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Box
                    sx={{
                      fontSize: 20,
                      bgcolor: '#FFCCCC',
                      color: '#FF0014',
                      p: 1,
                      display: 'inline-flex',
                      borderRadius: '4px',
                    }}
                  >
                    {test.icon}
                  </Box>
                  <Typography variant='h5' sx={{ mt: 3 }}>
                    {test.title}
                  </Typography>
                  <Typography variant='body1' color='textSecondary'>
                    {test.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
