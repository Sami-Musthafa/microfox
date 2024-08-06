import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Logo from '../../public/logo2.png';

const Footer = () => {
  const footerOptions = [
    'Privacy Policy',
    'Terms and Conditions',
    'Contact Us',
  ];

  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{ width: 1, bgcolor: 'black', color: 'white' }}
    >
      <Container maxWidth='md'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ px: 2 }}
        >
          <Stack width={1} direction='row' justifyContent='center'>
            {footerOptions.map((page) => (
              <Box
                key={page}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#FF8343',
                    transition: '0.5s',
                  },
                }}
              >
                <Typography>{page}</Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
      <Stack direction='row' alignItems='center' spacing={1} sx={{ px: 2 }}>
        <Stack>
          <Typography fontSize={12}>Microfox.co</Typography>
          <Typography fontSize={8} sx={{ alignSelf: 'flex-end' }}>
            © 2024
          </Typography>
        </Stack>
        <Image
          src={Logo}
          alt={'logo'}
          width={40}
          height={40}
          priority
          style={{
            objectFit: 'contain',
            borderRadius: 16,
            backgroundColor: 'white',
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Footer;
