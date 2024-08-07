'use client';
import { Box, Card, CardContent, Container, Stack } from '@mui/material';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import './designPackages.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bubble1 from '../../../public/Bubbles/light-orange.svg';

type Props = {};

const DesignFooter = (props: Props) => {
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
          <CardContent sx={{ width: '50%' }}>
            <Box sx={{ fontWeight: 'bold', fontSize: 80, py: 2 }}>
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
      <Stack alignItems={'center'} sx={{ my: 3, color: '#ffffff' }}>
        <Box sx={{ fontWeight: 'bold', fontSize: 40 }}>
          hello@designcraft.me
        </Box>
        <Box sx={{ fontSize: '12px' }}>Fine-tuning dresign since 2009</Box>
      </Stack>
      <Stack
        width={1}
        direction='row'
        justifyContent='space-between'
        sx={{ color: '#ffffff', py: 3 }}
      >
        <Stack sx={{ pl: 16 }}>
          <Box sx={{ fontWeight: 900, pb: 1, fontSize: 16 }}>
            Designcraft.me
          </Box>
          <Box sx={{ fontSize: 12 }}>© 2022</Box>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='flex-end'
          sx={{ pr: 16, fontSize: 14, color: 'grey' }}
        >
          <Box className='footerLink'>Terms & Conditions</Box>
          <Box className='footerLink'>Privacy Policy</Box>
          <Box className='footerLink'>Contact Me</Box>
          <Box className='footerLink'>Client Login</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DesignFooter;
