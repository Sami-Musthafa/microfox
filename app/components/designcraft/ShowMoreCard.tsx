/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import cold from '../../../public/Bubbles/cold.svg';
import hot from '../../../public/Bubbles/hot.svg';
import bubble2 from '../../../public/Bubbles/bubble2.svg';
import bubble4 from '../../../public/Bubbles/bubble4.svg';
import bubble5 from '../../../public/Bubbles/bubble5.svg';
import bubble6 from '../../../public/Bubbles/bubble6.svg';
import bubble7 from '../../../public/Bubbles/bubble7.svg';
import bubble8 from '../../../public/Bubbles/bubble8.svg';
import { motion } from 'framer-motion';

const ShowMoreCard = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Stack alignItems={'center'} sx={{ my: 5 }}>
        <Stack sx={{ width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' } }}>
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
      </Stack>
      <div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '-10%',
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
            top: '0',
            left: '-5%',
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
            top: '-10%',
            left: '0',
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
            bottom: '30%',
            right: '5%',
            zIndex: -1,
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
            top: '-10%',
            right: '-5%',
            zIndex: -1,
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
            bottom: '10%',
            right: '3%',
            zIndex: -1,
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.2 }}
          transition={{ duration: 1.8 }}
        >
          <Image src={bubble8} alt='bubble' width={200} height={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default ShowMoreCard;
