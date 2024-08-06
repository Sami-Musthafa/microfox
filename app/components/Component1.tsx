'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import pixelgoat from '../../public/pixelgoat.png';
import { motion } from 'framer-motion';

const ComponentOne = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      justifyContent='space-between'
      alignItems='center'
      mt={5}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Stack
          p={2}
          spacing={1}
          width={1}
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          <Stack>
            <Typography
              fontSize={{ xs: 24, md: 32, lg: 36 }}
              fontWeight='bold'
              fontFamily={'revert'}
            >
              On demand, unlimited
            </Typography>
            <Typography
              fontSize={{ xs: 24, md: 32, lg: 36 }}
              fontWeight='bold'
              fontFamily={'revert'}
              color='#FF8343'
            >
              design & development
            </Typography>
          </Stack>
          <Stack sx={{ pb: 2 }}>
            <Typography
              variant='subtitle2'
              fontSize={{ xs: 12, md: 16 }}
              fontWeight='bold'
              fontFamily={'revert'}
              color='#758694'
            >
              Unlimited revisions and requests.
            </Typography>
            <Typography
              variant='subtitle2'
              fontSize={{ xs: 12, md: 16 }}
              fontWeight='bold'
              fontFamily={'revert'}
              color='#758694'
            >
              Pause or cancel anytime.{' '}
            </Typography>
          </Stack>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size='small'
              variant='contained'
              sx={{
                width: 1,
                bgcolor: 'black',
                ':hover': { backgroundColor: '#FF8343', transition: '0.5s' },
              }}
            >
              Book a Call
            </Button>
          </motion.div>
        </Stack>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Stack width={{ xs: 350, sm: 1 }} alignItems='center'>
          <Image
            src={pixelgoat}
            alt='pixelgoat'
            priority
            objectFit='cover'
            layout='responsive'
            width={300}
            height={300}
          />
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default ComponentOne;
