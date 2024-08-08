'use client';
import { Box, Card, CardContent, Container, Stack } from '@mui/material';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import './designPackages.css';

const DesignFooter = () => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ width: 1, bgcolor: '#2C1338', py: 10 }}
    >
      <Container maxWidth='md'>
        <Card
          sx={{
            bgcolor: '#1C0B25',
            color: '#ffffff',
            borderRadius: 10,
            py: 6,
            px: 5,
          }}
        >
          <CardContent sx={{ width: { xs: 1, md: '50%' } }}>
            <Box
              sx={{ fontWeight: 'bold', fontSize: { xs: 60, sm: 80 }, py: 2 }}
            >
              Join the craft.
            </Box>
            <Box sx={{ fontSize: 14 }}>
              Discover how DesignCraft.me can align perfectly with your design
              needs.
            </Box>
            <div className='center scheduleCall'>
              <div className='scheduleCallBG' />
              <div className='scheduleCallIcon'>
                <FaArrowRight />
              </div>
              <div className='scheduleCallButton'>Schedule a call</div>
            </div>
          </CardContent>
        </Card>
      </Container>
      <Stack>
        <Stack alignItems={'center'} sx={{ my: 3, color: '#ffffff' }}>
          <Box
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: 20, md: 40 },
              color: '#FFF2ED',
            }}
          >
            hello@designcraft.me
          </Box>
          <Box sx={{ fontSize: '12px', color: '#E3D5D4' }}>
            Fine-tuning dresign since 2009
          </Box>
        </Stack>
        <Stack
          width={1}
          spacing={2}
          direction={{ xs: 'column-reverse', sm: 'row' }}
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          sx={{ color: '#ffffff' }}
        >
          <Stack flex={1} alignItems={'center'}>
            <Box
              sx={{
                fontWeight: 900,
                pb: 1,
                fontSize: { xs: 12, md: 16 },
                color: '#FFF2ED',
              }}
            >
              Designcraft.me
            </Box>
            <Box sx={{ fontSize: { xs: 10, md: 12 } }}>© 2022</Box>
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent='flex-end'
            alignItems={'center'}
            sx={{
              fontSize: { xs: 10, sm: 12, md: 14 },
              opacity: 0.6,
              fontWeight: 'bold',
              color: 'grey',
              py: 1,
            }}
          >
            <Box className='footerLink'>Terms & Conditions</Box>
            <Box className='footerLink'>Privacy Policy</Box>
            <Box className='footerLink'>Contact Me</Box>
            <Box className='footerLink'>Client Login</Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DesignFooter;
