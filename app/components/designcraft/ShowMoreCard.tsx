'use client';
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import bubble4 from '../../../public/Bubbles/bubble4.svg';
import bubble5 from '../../../public/Bubbles/bubble5.svg';
import bubble2 from '../../../public/Bubbles/bubble2.svg';
import bubble6 from '../../../public/Bubbles/bubble6.svg';
import bubble7 from '../../../public/Bubbles/bubble7.svg';
import bubble8 from '../../../public/Bubbles/bubble8.svg';
import cold from '../../../public/Bubbles/cold.svg';
import hot from '../../../public/Bubbles/hot.svg';

type Props = {};

const ShowMoreCard = (props: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '10%',
          zIndex: -1,
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.7 }}
        transition={{ duration: 0.9 }}
      >
        <Image src={bubble4} alt='bubble' width={200} height={200} />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '6%',
          zIndex: -1,
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 0.4 }}
        transition={{ duration: 1 }}
      >
        <Image src={bubble5} alt='bubble' width={200} height={200} />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          zIndex: -2,
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={bubble2} alt='bubble' width={200} height={200} />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40%',
          right: '-6%',
          zIndex: -2,
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.8 }}
        transition={{ duration: 1.2 }}
      >
        <Image src={bubble6} alt='bubble' width={200} height={200} />
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          // zIndex: -1,
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 0.7 }}
        transition={{ duration: 1.5 }}
      >
        <Image src={bubble7} alt='bubble' width={200} height={200} />
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          bottom: '0%',
          right: '3%',
          zIndex: -1,
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 0.2 }}
        transition={{ duration: 1.8 }}
      >
        <Image src={bubble8} alt='bubble' width={200} height={200} />
      </motion.div>

      <Container maxWidth='md'>
        <Stack alignItems={'center'} sx={{ my: 5, width: 1 }}>
          <Card sx={{ bgcolor: '#016aff', borderRadius: 5, mx: 5 }}>
            <CardContent>
              <Stack direction='row'>
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
                    intervention, my system handles everything autonomously
                    until you need to step in, if at all. Let me show you how to
                    turn cold leads into hot prospects.
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
                      <Stack
                        sx={{ height: 1, justifyContent: 'center', px: 1 }}
                      >
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
                    position: 'relative',
                  }}
                >
                  <Box>
                    Turn co
                    <span
                      style={{ position: 'absolute', right: '21%', top: '18%' }}
                    >
                      <Image src={cold} alt='bubble' width={62} height={62} />
                    </span>
                    ld outreach into ho
                    <span
                      style={{
                        position: 'absolute',
                        right: '26%',
                        bottom: '32%',
                      }}
                    >
                      <Image src={hot} alt='bubble' width={72} height={72} />
                    </span>
                    t outreach
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </div>
  );
};

export default ShowMoreCard;
