import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Header = () => {
  const headerPages = [
    'Portfolio',
    'How It Works',
    'Benefits',
    'About',
    'Contact',
  ];

  return (
    <Box sx={{ boxShadow: '0px 0px 5px gray' }}>
      <Container maxWidth='md'>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ px: 2 }}
        >
          <Box>Logo</Box>
          <Stack direction='row'>
            {headerPages.map((page) => (
              <Box
                key={page}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#FF8343',
                    bgcolor: '#F0EBE3',
                    transition: '0.5s',
                  },
                }}
              >
                <Typography>{page}</Typography>
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
