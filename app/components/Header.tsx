import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo2.png';

const Header = () => {
  const headerPages = [
    'Portfolio',
    'How It Works',
    'Benefits',
    'About',
    'Contact',
  ];

  return (
    <Box
      sx={{
        boxShadow: '0px 0px 5px gray',
        position: 'sticky',
        top: 0,
        bgcolor: '#f0ebe3',
        zIndex: 1,
      }}
    >
      <Container maxWidth='md'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ px: 2 }}
        >
          <Box>
            <Image
              src={Logo}
              alt={'logo'}
              width={40}
              height={40}
              priority
              style={{ objectFit: 'contain', borderRadius: '50%' }}
            />
          </Box>
          <Stack direction='row'>
            {headerPages.map((page) => (
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
                <Typography fontSize={{ xs: 12, md: 14 }}>{page}</Typography>
              </Box>
            ))}
          </Stack>
          <Box>
            <Button
              size='small'
              variant='contained'
              sx={{
                width: { xs: 'max-content', md: 160 },
                bgcolor: 'black',
                fontSize: { xs: 12, md: 14 },
                ':hover': {
                  backgroundColor: '#FF8343',
                  transition: '0.5s',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
