'use client';
/* eslint-disable react/no-unescaped-entities */
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

import cold from '../../../public/Bubbles/cold.svg';
import hot from '../../../public/Bubbles/hot.svg';

const ShowMoreCard = () => {
  return (
    <div>
      <Stack alignItems={'center'} sx={{ my: 5 }}>
        <Card sx={{ bgcolor: '#016aff', borderRadius: 5 }}>
          <CardContent>
            <Stack direction={{ xs: 'column', sm: 'row' }}>
              <Stack flex={1} p={3} sx={{ color: '#ffffff' }}>
                <Typography variant='body1' sx={{ color: 'orange' }}>
                  Automate your outreach
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                  Learn my simple method for attracting clients
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  This toolkit unveils my secret to a fully automated cold
                  outreach system using OpenAl & Zapier. After three months of
                  perfecting this automation, I'm sharing my proprietary setup
                  with you-from making initial contact to setting up a call to
                  close the deal. Unlike other Al tools that require constant
                  intervention, my system handles everything autonomously until
                  you need to step in, if at all. Let me show you how to turn
                  cold leads into hot prospects.
                </Typography>

                <Stack
                  sx={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    cursor: 'pointer',
                    mt: 5,
                    bgcolor: 'black',
                    width: 135,
                    p: 2,
                    borderRadius: 10,
                  }}
                >
                  <Stack
                    direction='row'
                    sx={{
                      '&:hover': {
                        justifyContent: 'space-between',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        justifySelf: 'flex-start',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Show me more
                    </Box>
                    <Stack sx={{ height: 1, justifyContent: 'center', px: 1 }}>
                      <FaArrowRight />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                flex={1}
                p={3}
                fontSize={70}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}
              >
                <Box>
                  Turn{' '}
                  <span style={{ position: 'relative' }}>
                    cold
                    <span
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 34,
                      }}
                    >
                      <Image src={cold} alt='bubble' width={58} height={58} />
                    </span>
                  </span>{' '}
                  outreach into{' '}
                  <span style={{ position: 'relative' }}>
                    hot
                    <span
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 30,
                      }}
                    >
                      <Image src={hot} alt='bubble' width={74} height={74} />
                    </span>
                  </span>{' '}
                  outreach
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
};

export default ShowMoreCard;
